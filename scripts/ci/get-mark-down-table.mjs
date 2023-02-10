import { setFailed, setOutput } from '@actions/core'
import { markdownTable } from 'markdown-table'
import bytes from 'bytes'
import { readFileSync } from 'fs'

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

async function run() {
  /**
   * @type {{size: number, name: string, passed: boolean}[] | null}
   */
  const baselineSizeReport = (() => {
    try {
      return JSON.parse(
        readFileSync(process.env.COMPARING_REPORT_FILE_PATH, 'utf-8')
      )
    } catch (e) {
      console.error(e)
      setFailed('Failed to Read Baseline metrics file')
    }
  })()

  /**
   * @type {{size: number, name: string, passed: boolean}[] | null}
   */
  const comparingSizeReport = (() => {
    try {
      return JSON.parse(
        readFileSync(process.env.COMPARING_REPORT_FILE_PATH, 'utf-8')
      )
    } catch (e) {
      console.error(e)
      setFailed('Could not load Comparing Size Report')
    }
  })()

  if (!comparingSizeReport) {
    return null
  }

  const resultEntries = comparingSizeReport.map((entry) => {
    const baselineEntry = baselineSizeReport?.find(
      ({ name }) => name === entry.name
    )

    const size = `${formatBytes(entry.size)} (${
      baselineEntry
        ? compareSizeWithBaseline(entry.size, baselineEntry.size)
        : 'Baseline not found'
    })`

    return [entry.name, size, entry.passed ? 'Yes 🎉' : 'No 👎']
  })

  const formattedTable = markdownTable([
    ['Name', 'Size', 'Passed ?'],
    resultEntries,
  ])

  // Store the stats
  setOutput('sizeReportTable', formattedTable)

  // check if atleast one of the file(s) failed to made the size check
  if (currentOutput.some((entry) => entry.passed === false)) {
    setFailed('Size limit has been exceeded.')
  }
}

await run()
