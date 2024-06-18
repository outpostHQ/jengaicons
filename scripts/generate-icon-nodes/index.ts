import { error } from "console"
import * as fs from "fs-extra"
import * as path from "path"
import { parseStringPromise } from "xml2js"
import { toKebabCase } from "./utils"

interface SvgElement {
  $?: { [key: string]: string } // Represents SVG element attributes
}

interface SvgStructure {
  svg: { [key: string]: SvgElement | SvgElement[] } // Represents SVG structure with nested elements
}

const INPUT_DIR = path.resolve(process.argv[2])
const OUTPUT_DIR = path.join(INPUT_DIR, "../docs/data/icon-nodes")

// Function to extract attributes from an SVG element
const extractAttributes = (element: SvgElement) => {
  if (!element.$) return null
  return { ...element.$ }
}

// Function to convert an SVG file to JSON format
const convertToJson = async (filePath: string, outputFileName: string) => {
  const fileContent = await fs.readFile(filePath, "utf-8")
  const result = (await parseStringPromise(fileContent)) as SvgStructure

  // Extract SVG elements and their attributes
  const jsonNodes = Object.entries(result.svg)
    .map(([key, value]) => {
      const elementsArray = Array.isArray(value) ? value : [value]
      const elements = elementsArray
        .map((element) => extractAttributes(element))
        .filter(Boolean)
      return elements.length > 0 ? [key, elements] : null
    })
    .filter(Boolean)

  // Format the JSON nodes and write to a file in the output directory
  const formattedJsonNodes = jsonNodes.flatMap(([key, elements]) =>
    (elements as { [key: string]: string }[]).map((element) => [key, element]),
  )
  const cleanedFileName = outputFileName.replace(/-regular/, "")

  // Write the JSON content to the output file
  await fs.outputFile(
    path.join(OUTPUT_DIR, cleanedFileName),
    JSON.stringify(formattedJsonNodes, null, 2),
  )
}

const processDirectory = async (dir: string) => {
  // Read the contents of the directory
  const files = await fs.readdir(dir)
  for (const file of files) {
    const filePath = path.join(dir, file)
    const fileStat = await fs.stat(filePath)

    if (fileStat.isDirectory()) {
      await processDirectory(filePath)
    } else if (fileStat.isFile() && path.extname(file) === ".svg") {
      const outputFileName = `${toKebabCase(path.basename(file, ".svg"))}.node.json`
      await convertToJson(filePath, outputFileName)
    }
  }
}

const main = async () => {
  // Check if the input directory exists
  if (!(await fs.pathExists(INPUT_DIR))) {
    console.error(`Input directory does not exist: ${INPUT_DIR}`)
    process.exit(1)
  }

  await fs.ensureDir(OUTPUT_DIR)

  await processDirectory(INPUT_DIR)

  console.log("Icon nodes generated successfully!")
}

main().catch((error) => console.error(error))
