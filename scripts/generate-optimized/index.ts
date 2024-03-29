import fs from "fs"
import fsP from "fs/promises"
import path from "path"
import svgo from "svgo"
import {
  IconMetadata,
  TVariants,
  VariantIconMetaData,
} from "../generate-jengaicons-react/types"
import { COMPRESSION_LEVEL, zip } from "zip-a-folder"

const capitalize = (str: string) => `${str[0].toUpperCase()}${str.slice(1)}`

const getSafeComponentName = (svgFileName: string, variant: string) => {
  const componentName = `${svgFileName
    .split("-")[0]
    .trim()
    .replace(/\.svg$/i, "")}${capitalize(variant)}`

  let safeComponentName = componentName
    .replace(/\./g, "")
    .replace(/-/g, "")
    .replace(/\s*/g, "")
    .replace(/&/g, "")

  // If variant = regular then strip Regular, ActivityRegular -> Activity
  if (/regular$/i.test(variant)) {
    safeComponentName = safeComponentName.replace(/regular$/i, "")
  }

  return safeComponentName
}

const transformToName = (svg_name: string) => {
  let name = svg_name[0].toLowerCase()
  const seperator = " "

  for (let i = 1; i < svg_name.length; i++) {
    if (svg_name[i] === svg_name[i].toUpperCase()) {
      name += `${seperator}${svg_name[i].toLowerCase()}`
    } else {
      name += svg_name[i]
    }
  }

  return name
}

/**
 * This script is for generating optimized svgs at the root level
 */
async function main() {
  /**
   * command format
   * jengaicons <path-to-folders-with-svgs>
   */
  const args = process.argv.slice(2)

  if (args.length === 0) {
    throw new Error("No path provided")
  }

  const [pathToAssets] = args

  // get all the directories in the assets directory
  const itemsInDirectory = fs
    .readdirSync(pathToAssets, { withFileTypes: true })
    .filter((item) => item.isDirectory())

  // prepare the optimized svgs
  // remove any exisitng optimized folder
  const root = path.join(pathToAssets, "..")
  const pathToOptimized = path.join(root, "optimized")

  const allDirs = fs.readdirSync(root)
  if (allDirs.includes("optimized")) {
    fs.rmSync(pathToOptimized, { recursive: true })
  }

  // create new empty optimized folder
  fs.mkdirSync(pathToOptimized)
  for (const { name: fontVariant } of itemsInDirectory) {
    fs.mkdirSync(path.join(pathToOptimized, fontVariant))
  }

  const allIcons: IconMetadata[] = []

  const variants: TVariants[] = []

  for (const item of itemsInDirectory) {
    const variant = item.name

    variants.push(variant as TVariants)

    const svgFiles = fs
      .readdirSync(path.join(pathToAssets, variant), {
        withFileTypes: true,
      })
      .filter((file) => file.name.endsWith(".svg"))
      .map((item) => item.name)

    for (const svgFile of svgFiles) {
      const SVGComponentName = getSafeComponentName(svgFile, variant)

      const svgString = fs.readFileSync(
        path.join(pathToAssets, variant, svgFile),
        "utf8",
      )

      /**
       * Optimize the svg, this will remove all the unnecessary
       */
      const optimizedSvgString = svgo.optimize(svgString, {
        path: pathToOptimized,
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                removeViewBox: false,
              },
            },
          },
        ],
      })

      /**
       * Write the component to the optimized folder
       */
      fs.writeFileSync(
        path.join(pathToOptimized, variant, `${SVGComponentName}.svg`),
        optimizedSvgString.data,
      )

      allIcons.push({
        name: transformToName(SVGComponentName),
        safeName: SVGComponentName,
        tags: [SVGComponentName],
        categories: [],
        variant: variant.toLowerCase() as IconMetadata["variant"],
      })

      // Write JSON file associated to it
      // fs.writeFileSync(
      //   path.join(pathToOptimized, variant, `${SVGComponentName}.json`),
      //   JSON.stringify(allIcons[allIcons.length - 1], null, 2)
      // )
    }
  }
  // const WEBSITE_FOLDER = path.join("..", "..", "website")

  // const WEBSITE_PUBLIC_FOLDER = path.join(WEBSITE_FOLDER, "public")
  // const PATH_TO_ZIP_FILE = path.join(WEBSITE_PUBLIC_FOLDER, "jengaicons.zip")
  // Create a zip file
  // await zip(pathToOptimized, PATH_TO_ZIP_FILE, {
  //   compression: COMPRESSION_LEVEL.high,
  // })

  // const PATH_TO_PUBLIC_ICON_FOLDER = path.join(
  //   WEBSITE_PUBLIC_FOLDER,
  //   "iconSVGs",
  // )
  // Copy Optimized folder to Website public folder
  // await fsP.cp(pathToOptimized, PATH_TO_PUBLIC_ICON_FOLDER, {
  //   recursive: true,
  // })

  // sort by name imports
  allIcons.sort((a, b) => a.safeName.localeCompare(b.safeName))

  // write all icons data
  fs.writeFileSync(
    path.join(pathToOptimized, "allIconsData.json"),
    JSON.stringify(allIcons, null, 2),
  )

  for (const variant of variants) {
    const variantIcons: VariantIconMetaData[] = allIcons
      .filter((icon) => icon.variant === variant)
      .sort((a, b) => a.safeName.localeCompare(b.safeName))
      .map((icon) => ({
        name: icon.name,
        safeName: icon.safeName,
        categories: icon.categories.length === 0 ? undefined : icon.categories,
        tags: icon.tags.length === 0 ? undefined : icon.tags,
      }))

    fs.writeFileSync(
      path.join(pathToOptimized, `${variant}.json`),
      JSON.stringify(variantIcons),
    )
  }
}

main().catch((e) => console.log(e.message))
