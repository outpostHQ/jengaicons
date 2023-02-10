import { writeFile } from 'node:fs/promises'
import { setFailed, setOutput } from '@actions/core'
import { getExecOutput } from '@actions/exec'

async function run() {
  try {
    const { stdout: SLstats } = await getExecOutput(
      'npx size-limit',
      [
        '--clean-dir',
        `--save-bundle ${process.env.REPORT_OUTPUT_DIR}`,
        '--json',
      ],
      {
        ignoreReturnCode: true,
      }
    )
  } catch (e) {
    console.error(e)
    setFailed('Failed to execute `npx size-limit`')
  }

  setOutput('reportJSON', JSON.parse(SLstats))

  try {
    // WRITE REPORT JSON
    await writeFile(
      path.join(process.env.REPORT_OUTPUT_DIR, 'size-report.json'),
      SLstats
    )
  } catch (error) {
    console.error(e)
    setFailed('Failed to write the report file')
  }
}

await run()
