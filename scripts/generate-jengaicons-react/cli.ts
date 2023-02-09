import { Command } from 'commander'

interface ICLIArgs {
  assets: string
  clean: boolean
  optimize: boolean
  rootPath: string
  outputFolderName: string
}

const getCLIArgs = () => {
  const program = new Command()

  program
    .option('--assets <path>', 'Path to Assets folder', '../../optimized')
    .option(
      '--root-path <path>',
      'Root Path for react package',
      '../../packages/jengaicons-react'
    )
    .option(
      '--output-folder-name <name>',
      'Output Folder name for writing the "icons"',
      'icons'
    )

  program.parse()

  return program.opts<ICLIArgs>()
}

export { getCLIArgs }
