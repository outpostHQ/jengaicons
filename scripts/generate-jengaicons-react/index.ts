import fs from 'fs'
import path from 'path'
import transform from './transform'
import { getCLIArgs } from './cli'
import { TVariants } from './types'

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
  const componentName = `${svgFileName.replace('.svg', '')}${capitalize(
    variant
  )}`

  let safeComponentName = componentName.replace('.', '')
  safeComponentName = safeComponentName.replace('-', '')
  safeComponentName = safeComponentName.replace(' ', '')
  safeComponentName = safeComponentName.replace('&', '')

  return safeComponentName
}

const capitalize = (str: string) => `${str[0].toUpperCase()}${str.slice(1)}`

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

  for (let item of itemsInDirectory) {
    const variantFolder = item.name as TVariants

    const tasks = getSVGFileNames(variantFolder).map(async (svgFileName) => {
      const svgFileContent = getReactSVGContent(svgFileName, variantFolder)

      let componentName = getSafeComponentName(svgFileName, variantFolder)

      // If variant = regular then strip Regular, ActivityRegular -> Activity
      if (variantFolder.match(/regular$/i)) {
        componentName = componentName.replace(/regular$/i, '')
      }

      /**
       * SVG generated component with export statement
       */
      const svgComponent = transform({
        componentName,
        defaultSize: 32,
        svgContent: svgFileContent,
        defaultColor: '#000000', // BLACK COLOR
        defaultWeight: '2',
        variant: capitalize(variantFolder) as TVariants,
      })

      /**
       * Write the component to the optimized folder
       */
      fs.writeFileSync(
        path.join(PATH_TO_WRITE_FOLDER, variantFolder, `${componentName}.tsx`),
        svgComponent
      )

      fs.appendFileSync(
        PATH_TO_SRC_INDEX_FILE,
        `export { default as ${componentName} } from "../${args.outputFolderName}/${variantFolder}/${componentName}";\n`
      )
    })

    await Promise.all(tasks)
  }

  fs.appendFileSync(
    PATH_TO_SRC_INDEX_FILE,
    [
      `export { JengaIconContext } from "./base";`,
      `export type { JengaIconProps }  from "./base"`,
      `export type { JengaIconRegularProps } from "./base"`,
    ].join('\n')
  )
}

main()
  .then(() => {
    console.log('Finished generating for react!')
  })
  .catch((e) => console.log(e.message))
