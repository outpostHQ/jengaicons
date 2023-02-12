import fs from 'fs'
import path from 'path'
import transform from './transform'
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

const getReactSVGContent = (svgFileName: string, variant: string) => {
  return fs
    .readFileSync(path.join(PATH_TO_ASSETS, variant, svgFileName), 'utf8')
    .replace(/fill\-rule/g, 'fillRule')
    .replace(/stroke-linecap/g, 'strokeLinecap')
    .replace(/stroke-linejoin/g, 'strokeLinejoin')
    .replace(/stroke-width/g, 'strokeWidth')
    .replace(/stroke-miterlimit/g, 'strokeMiterlimit')
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

  const promises = itemsInDirectory.map(async (item) => {
    const variant = item.name

    const tasks = getSVGFileNames(variant).map(async (svgFileName) => {
      const svgFileContent = getReactSVGContent(svgFileName, variant)

      const componentName = getSafeComponentName(svgFileName, variant)

      /**
       * SVG generated component with export statement
       */
      const svgComponent = transform({
        componentName,
        defaultSize: 32,
        svgContent: svgFileContent,
        defaultColor: '#000000', // BLACK COLOR
      })

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
    })

    await Promise.all(tasks)
  })

  await Promise.all(promises)
}

main()
  .then(() => {
    console.log('Finished generating for react!')
  })
  .catch((e) => console.log(e.message))
