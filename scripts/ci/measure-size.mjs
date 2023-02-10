import { readFile } from 'node:fs/promises'
import { setFailed, setOutput } from '@actions/core'
import { getExecOutput } from '@actions/exec'
import markdownTable from 'markdown-table'
import bytes from 'bytes'

async function run() {
  /**
   * @type {{size: number, name: string, passed: boolean}[] | null}
   */
  const baselineOutputReport = await (async () => {
    try {
      const baselineRawJson = await readFile(process.env.BASELINE, 'utf-8')
      return JSON.parse(baselineRawJson)
    } catch (e) {
      console.error('Failed to Read Baseline Output file', e)
      return null
    }
  })()

  /**
   * @type {{metrics:{size: number, name: string, passed: boolean}[], webpackStats: unknown}}
   */
  const currentOutput = await (async () => {
    // SL = size limit
    const { stdout: SLstats } = await getExecOutput(
      'npx size-limit',
      [
        '--clean-dir',
        `--save-bundle ${process.env.SIZE_LIMIT_OUTPUT_DIR}`,
        '--json',
      ],
      {
        ignoreReturnCode: true,
      }
    )

    return {
      metrics: SLstats,
      webpackStats: JSON.parse(
        await readFile(
          path.join(process.env.SIZE_LIMIT_OUTPUT_DIR, 'stats.json')
        )
      ),
    }
  })()

  const formattedTable = markdownTable([
    ['Name', 'Size', 'Passed ?'],

    ...currentOutput.map((entry) => {
      const baselineEntry = baselineOutputReport?.find(
        ({ name }) => name === entry.name
      )

      const size = `${formatBytes(entry.size)} (${
        baselineEntry
          ? compareSizeWithBaseline(entry.size, baselineEntry.size)
          : 'Baseline not found'
      })`

      return [entry.name, size, entry.passed ? 'Yes 🎉' : 'No 👎']
    }),
  ])

  // Store the stats
  setOutput('metricsJSON', currentOutput.metrics)
  setOutput('webpackStatsJSON', currentOutput.webpackStats)
  setOutput('metricStatsTable', formattedTable)

  // check if atleast one of the file(s) failed to made the size check
  if (currentOutput.some((entry) => entry.passed === false)) {
    setFailed('Size limit has been exceeded.')
  }
}

/**
 * @param size {number}
 * @return {string | null}
 */
function formatBytes(size) {
  return bytes.format(size, { unitSeparator: ' ' })
}

/**
 * @param current {number}
 * @param baseline {number}
 * @return {string}
 */
function compareSizeWithBaseline(current, baseline) {
  if (baseline === 0) {
    return '+100% 🔺'
  }

  const diffPercent = ((current - baseline) / baseline) * 100

  // trucated to two decimal places
  const trucPercent =
    (Math.sign(diffPercent) * Math.ceil(Math.abs(diffPercent) * 100)) / 100

  if (diffPercent > 0) {
    return `+${trucPercent}% 🔺`
  }

  if (diffPercent === 0) {
    return `${trucPercent}% 🟰`
  }

  return `${trucPercent}% 🔽👏`
}

await run()
