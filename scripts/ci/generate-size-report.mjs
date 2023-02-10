import { writeFile } from 'node:fs/promises'
import { setFailed, setOutput } from '@actions/core'
import { getExecOutput } from '@actions/exec'
import path from 'path'

async function run() {
  let output
  try {
    output = (
      await getExecOutput(
        'npx size-limit',
        [
          `--save-bundle`,
          process.env.REPORT_OUTPUT_DIR,
          '--clean-dir',
          '--json',
        ],
        {
          ignoreReturnCode: true,
        }
      )
    ).stdout

    setOutput('reportJSON', JSON.parse(output))
  } catch (e) {
    console.error(e)
    setFailed('Failed to execute `npx size-limit`')
    return
  }

  try {
    // WRITE REPORT JSON
    await writeFile(
      path.join(process.env.REPORT_OUTPUT_DIR, 'size-report.json'),
      output
    )
  } catch (e) {
    console.error(e)
    setFailed('Failed to write the report file')
  }
}

await run()
