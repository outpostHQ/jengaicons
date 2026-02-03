import fs from "fs"
import path from "path"
import transform from "./transform"
import { getCLIArgs } from "./cli"
import { TVariants } from "./types"

const args = getCLIArgs()
const PATH_TO_ASSETS = args.assets
const PATH_TO_WRITE_FOLDER = path.join(args.rootPath, args.outputFolderName)
const PATH_TO_SRC_FOLDER = path.join(args.rootPath)
const PATH_TO_INDEX_ICON_FILE = path.join(PATH_TO_WRITE_FOLDER, "index.js")

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

const getSvelteSVGContent = (svgFileName: string, variant: string) => {
  return fs.readFileSync(
    path.join(PATH_TO_ASSETS, variant, svgFileName),
    "utf8",
  )
}

const getSafeComponentName = (svgFileName: string, variant: string) =>
  svgFileName.replace(/\.svg$/i, "")

async function main() {
  const itemsInDirectory = getIconDirs()

  if (pathPresent(PATH_TO_WRITE_FOLDER))
    fs.rmSync(PATH_TO_WRITE_FOLDER, { recursive: true })

  if (pathPresent(PATH_TO_INDEX_ICON_FILE)) fs.rmSync(PATH_TO_INDEX_ICON_FILE)

  if (!pathPresent(PATH_TO_SRC_FOLDER)) fs.mkdirSync(PATH_TO_SRC_FOLDER)

  fs.mkdirSync(PATH_TO_WRITE_FOLDER)

  // create variant folders in WRITE TO PATH FOLDER
  // for (const items of itemsInDirectory) {
  //   const variant_folder_path = path.join(PATH_TO_WRITE_FOLDER, items.name)

  //   if (!pathPresent(variant_folder_path)) fs.mkdirSync(variant_folder_path)
  // }

  for (const item of itemsInDirectory) {
    const variantFolder = item.name as Lowercase<TVariants>

    getSVGFileNames(variantFolder)
      // .slice(0, 1)
      .map((svgFileName) => {
        const svgFileContent = getSvelteSVGContent(svgFileName, variantFolder)

        let componentName = getSafeComponentName(svgFileName, variantFolder)
        console.log("Making", componentName)

        /**
         * SVG generated component with export statement
         */
        const svgComponent = transform({
          componentName,
          defaultSize: 32,
          svgContent: svgFileContent,
          defaultColor: "currentColor",
          defaultWeight: "2",
          variant: variantFolder.toLowerCase() as TVariants,
        })

        /**
         * Write the component to the packages/icons folder
         */
        fs.writeFileSync(
          path.join(PATH_TO_WRITE_FOLDER, `${componentName}.svelte`),
          svgComponent.output,
        )

        /** create js file of the respective icon*/
        fs.writeFileSync(
          path.join(PATH_TO_WRITE_FOLDER, `${componentName}.js`),
          `export { default } from "./${componentName}.svelte";`,
        )

        /** create typescript file of .js file*/
        fs.writeFileSync(
          path.join(PATH_TO_WRITE_FOLDER, `${componentName}.d.ts`),
          `export { default } from "./${componentName}.svelte";`,
        )

        /** create typescript file of .svelte file*/
        fs.writeFileSync(
          path.join(PATH_TO_WRITE_FOLDER, `${componentName}.svelte.d.ts`),
          `import type { Component } from 'svelte';
import type { IconProps } from '../types.js';

declare const ${componentName}: Component<IconProps>;
export default ${componentName};
`.trim(),
        )

        // append component to index file
        fs.appendFileSync(
          PATH_TO_INDEX_ICON_FILE,
          `export { default as ${componentName} } from "./${componentName}.js";\n`,
        )

        // append component to index typescript file
        fs.appendFileSync(
          PATH_TO_INDEX_ICON_FILE + ".d.ts",
          `export { default as ${componentName} } from "./${componentName}.js";\n`,
        )
      })
  }

  // fs.appendFileSync(
  //   PATH_TO_SRC_INDEX_FILE,
  //   [
  //     `export type *  from "./types"`,
  //   ].join("\n"),
  // )
}

main()
  .then(() => {
    console.log("Finished generating for svelte!")
  })
  .catch((e) => console.log(e.message))
