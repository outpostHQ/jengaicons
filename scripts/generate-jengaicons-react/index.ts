import fs from 'fs'
import path from 'path'
import { transform } from '@svgr/core'
import { getCLIArgs } from './cli'

const args = getCLIArgs()
const PATH_TO_ASSETS = args.assets
const PATH_TO_WRITE_FOLDER = path.join(args.rootPath, args.outputFolderName)
const PATH_TO_SRC_FOLDER = path.join(args.rootPath, 'src')
const PATH_TO_SRC_INDEX_FILE = path.join(PATH_TO_SRC_FOLDER, 'index.tsx')

const pathPresent = (path: string) => fs.existsSync(path)

/**
 * Get all the directories in the assets directory
 */
const getIconDirs = () => {
  if (!pathPresent(PATH_TO_ASSETS))
    throw new Error(`Path : "${PATH_TO_ASSETS}" does not exists`)

  return fs
    .readdirSync(PATH_TO_ASSETS, { withFileTypes: true })
    .filter((item) => item.isDirectory())
}

/**
 * @returns only the names of svg files
 */
const getSVGFileNames = (variant: string) => {
  return fs
    .readdirSync(path.join(PATH_TO_ASSETS, variant), {
      withFileTypes: true,
    })
    .filter((file) => file.name.endsWith('.svg'))
    .map((item) => item.name)
}

const getSVGContent = (svgFileName: string, variant: string) => {
  return fs.readFileSync(
    path.join(PATH_TO_ASSETS, variant, svgFileName),
    'utf8'
  )
}

const getSafeComponentName = (svgFileName: string, variant: string) => {
  const componentName = `${svgFileName.replace(
    '.svg',
    ''
  )}${variant[0].toUpperCase()}${variant.slice(1)}`

  let safeComponentName = componentName.replace('.', '')
  safeComponentName = safeComponentName.replace('-', '')
  safeComponentName = safeComponentName.replace(' ', '')
  safeComponentName = safeComponentName.replace('&', '')

  return safeComponentName
}

async function main() {
  const itemsInDirectory = getIconDirs()

  if (pathPresent(PATH_TO_WRITE_FOLDER))
    fs.rmSync(PATH_TO_WRITE_FOLDER, { recursive: true })

  if (pathPresent(PATH_TO_SRC_INDEX_FILE)) fs.rmSync(PATH_TO_SRC_INDEX_FILE)

  if (!pathPresent(PATH_TO_SRC_FOLDER)) fs.mkdirSync(PATH_TO_SRC_FOLDER)

  fs.mkdirSync(PATH_TO_WRITE_FOLDER)

  // create variant folders in WRITE TO PATH FOLDER
  for (const items of itemsInDirectory) {
    const variant_folder_path = path.join(PATH_TO_WRITE_FOLDER, items.name)

    if (!pathPresent(variant_folder_path)) fs.mkdirSync(variant_folder_path)
  }

  for (const item of itemsInDirectory) {
    const variant = item.name

    for (const svgFileName of getSVGFileNames(variant)) {
      const svgFileContent = getSVGContent(svgFileName, variant)

      const componentName = getSafeComponentName(svgFileName, variant)

      /**
       * Transform the svg to react component,
       * and add whatever props are required
       */
      const componentTransformConfig: Parameters<typeof transform>[1] = {
        exportType: 'default',
        namedExport: componentName,
        typescript: true,
        icon: true,
        prettier: true,
        svgProps: {
          width: '32',
          height: '32',
          viewBox: '0 0 32 32',
        },
      }

      /**
       * SVG generated component with export statement
       */
      const svgComponent = await transform(
        svgFileContent,
        componentTransformConfig,
        { componentName: componentName }
      )

      /**
       * Write the component to the optimized folder
       */
      fs.writeFileSync(
        path.join(PATH_TO_WRITE_FOLDER, variant, `${componentName}.tsx`),
        svgComponent
      )

      fs.appendFileSync(
        PATH_TO_SRC_INDEX_FILE,
        `export { default as ${componentName} } from "../${args.outputFolderName}/${variant}/${componentName}";\n`
      )
    }
  }
}

main()
  .then(() => {
    console.log('Finished generating for react!')
  })
  .catch((e) => console.log(e.message))
