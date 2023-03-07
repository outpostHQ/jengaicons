import fs from "fs"
import path from "path"
import transform from "./transform"
import { getCLIArgs } from "./cli"
import { TVariants } from "./types"

const args = getCLIArgs()
const PATH_TO_ASSETS = args.assets
const PATH_TO_WRITE_FOLDER = path.join(args.rootPath, args.outputFolderName)
const PATH_TO_SRC_FOLDER = path.join(args.rootPath, "src")
const PATH_TO_SRC_INDEX_FILE = path.join(PATH_TO_SRC_FOLDER, "index.tsx")

const pathPresent = (path: string) => fs.existsSync(path)
const capitalize = (str: string) => `${str[0].toUpperCase()}${str.slice(1)}`

/**
 * Get all the directories in the assets directory
 */
const getIconDirs = () => {
  if (!pathPresent(PATH_TO_ASSETS))
    throw new Error(`Path : "${PATH_TO_ASSETS}" does not exists`)
  const icons = fs
    .readdirSync(PATH_TO_ASSETS, { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .sort((a, b) => a.name.localeCompare(b.name))
  return icons
}

/**
 * @returns only the names of svg files
 */
const getSVGFileNames = (variant: string) => {
  const svgs = fs
    .readdirSync(path.join(PATH_TO_ASSETS, variant), {
      withFileTypes: true,
    })
    .filter((file) => file.name.endsWith(".svg"))
    .map((item) => item.name)
    .sort((a, b) => a.localeCompare(b))

  return svgs
}

const getReactSVGContent = (svgFileName: string, variant: string) => {
  return fs
    .readFileSync(path.join(PATH_TO_ASSETS, variant, svgFileName), "utf8")
    .replace(/fill-rule/g, "fillRule")
    .replace(/stroke-linecap/g, "strokeLinecap")
    .replace(/stroke-linejoin/g, "strokeLinejoin")
    .replace(/stroke-width/g, "strokeWidth")
    .replace(/stroke-miterlimit/g, "strokeMiterlimit")
    .replace(/clip-rule/g, "clipRule")
    .replace(/stroke-dasharray/g, "strokeDasharray")
}

const getSafeComponentName = (svgFileName: string, variant: string) => {
  // const componentName = `${svgFileName.replace('.svg', '')}${capitalize(
  //   variant
  // )}`

  // let safeComponentName = componentName
  //   .replace(/\./g, '')
  //   .replace(/-/g, '')
  //   .replace(/\s*/g, '')
  //   .replace(/&/g, '')

  // return safeComponentName

  return svgFileName.replace(/\.svg$/i, "")
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
    const variantFolder = item.name as Lowercase<TVariants>

    getSVGFileNames(variantFolder).map((svgFileName) => {
      const svgFileContent = getReactSVGContent(svgFileName, variantFolder)

      let componentName = getSafeComponentName(svgFileName, variantFolder)
      console.log("Making", componentName)

      /**
       * SVG generated component with export statement
       */
      const svgComponent = transform({
        componentName,
        defaultSize: 32,
        svgContent: svgFileContent,
        defaultColor: "#000000", // BLACK COLOR
        defaultWeight: "2",
        variant: capitalize(variantFolder) as TVariants,
      })

      /**
       * Write the component to the packages/icons folder
       */
      fs.writeFileSync(
        path.join(PATH_TO_WRITE_FOLDER, variantFolder, `${componentName}.tsx`),
        svgComponent,
      )

      fs.appendFileSync(
        PATH_TO_SRC_INDEX_FILE,
        `export { default as ${componentName} } from "../${args.outputFolderName}/${variantFolder}/${componentName}";\n`,
      )
    })
  }

  fs.appendFileSync(
    PATH_TO_SRC_INDEX_FILE,
    [
      `export { JengaIconContext } from "./base";`,
      `export type { JengaIconProps }  from "./base"`,
      `export type { JengaIconRegularProps } from "./base"`,
    ].join("\n"),
  )
}

main()
  .then(() => {
    console.log("Finished generating for react!")
  })
  .catch((e) => console.log(e.message))
