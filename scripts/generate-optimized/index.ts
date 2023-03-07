import fs from 'fs'
import fsP from 'fs/promises'
import path from 'path'
import { optimize } from 'svgo'
import { IconMetadata, TVariants } from '../generate-jengaicons-react/types'

const capitalize = (str: string) => `${str[0].toUpperCase()}${str.slice(1)}`

const getSafeComponentName = (svgFileName: string, variant: string) => {
  const componentName = `${svgFileName
    .split('-')[0]
    .trim()
    .replace(/\.svg$/i, '')}${capitalize(variant)}`

  let safeComponentName = componentName
    .replace(/\./g, '')
    .replace(/-/g, '')
    .replace(/\s*/g, '')
    .replace(/&/g, '')

  // If variant = regular then strip Regular, ActivityRegular -> Activity
  if (/regular$/i.test(variant)) {
    safeComponentName = safeComponentName.replace(/regular$/i, '')
  }

  return safeComponentName
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
    throw new Error('No path provided')
  }

  const [pathToAssets] = args

  // get all the directories in the assets directory
  const itemsInDirectory = fs
    .readdirSync(pathToAssets, { withFileTypes: true })
    .filter((item) => item.isDirectory())

  // prepare the optimized svgs
  // remove any exisitng optimized folder
  const root = path.join(pathToAssets, '..')
  const pathToOptimized = path.join(root, 'optimized')

  const allDirs = fs.readdirSync(root)
  if (allDirs.includes('optimized')) {
    fs.rmSync(pathToOptimized, { recursive: true })
  }

  // create new empty optimized folder
  fs.mkdirSync(pathToOptimized)
  for (const { name: fontVariant } of itemsInDirectory) {
    fs.mkdirSync(path.join(pathToOptimized, fontVariant))
  }

  const allIcons: {
    [variant in Lowercase<TVariants>]: IconMetadata[]
  } = {
    fill: [],
    regular: [],
  }

  for (const item of itemsInDirectory) {
    const variant = item.name

    const svgFiles = fs
      .readdirSync(path.join(pathToAssets, variant), {
        withFileTypes: true,
      })
      .filter((file) => file.name.endsWith('.svg'))
      .map((item) => item.name)

    svgFiles.map((svgFile) => {
      const SVGComponentName = getSafeComponentName(svgFile, variant)

      const svgString = fs.readFileSync(
        path.join(pathToAssets, variant, svgFile),
        'utf8'
      )

      /**
       * Optimize the svg, this will remove all the unnecessary
       */
      const optimizedSvgString = optimize(svgString, {
        path: pathToOptimized,
      })

      /**
       * Write the component to the optimized folder
       */
      fs.writeFileSync(
        path.join(pathToOptimized, variant, `${SVGComponentName}.svg`),
        optimizedSvgString.data
      )

      allIcons[variant.toLowerCase()].push({
        name: SVGComponentName,
        safeName: SVGComponentName,
        tags: [SVGComponentName],
        // TODO: add a way to categorize
        categories: [],
        variant: variant.toLowerCase() as IconMetadata['variant'],
      })

      // Write JSON file associated to it
      // fs.writeFileSync(
      //   path.join(pathToOptimized, variant, `${SVGComponentName}.json`),
      //   JSON.stringify(allIcons[allIcons.length - 1], null, 2)
      // )
    })
  }

  const combinedIcons: IconMetadata[] = []

  for (const variant of Object.keys(allIcons)) {
    const VARIANT_DATA_PATH = path.join(pathToOptimized, `${variant}.json`)

    // sort by name
    ;(allIcons[variant] as IconMetadata[]).sort((a, b) =>
      a.safeName.localeCompare(b.safeName)
    )

    // write variant icons to their specific variant file
    fs.writeFileSync(
      VARIANT_DATA_PATH,
      JSON.stringify(
        (allIcons[variant] as IconMetadata[]).map((v) => {
          return {
            ...v,
            categories: v.categories.length > 0 ? v.categories : undefined,
            variant: undefined,
          }
        })
      )
    )

    // add it into combinedIconPool
    combinedIcons.push(...allIcons[variant])
  }

  // write all icons data
  fs.writeFileSync(
    path.join(pathToOptimized, 'combined-icons.json'),
    JSON.stringify(combinedIcons)
  )
}

main().catch((e) => console.log(e.message))
