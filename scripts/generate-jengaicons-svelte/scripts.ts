export {}

import { readdirSync, readFileSync } from "fs"
import path from "path"
import { IconMetadata } from "./types"
import { getJSONFiles } from "./utils"

const ROOT_FOLDER = path.join("..", "..")
const OPTIMIZED_FOLDER_PATH = path.join(ROOT_FOLDER, "optimized")

const iconVariants = readdirSync(OPTIMIZED_FOLDER_PATH)

for (const variant of iconVariants) {
  const VARIANT_FOLDER_PATH = path.join(OPTIMIZED_FOLDER_PATH, variant)

  for (const iconFileJSON of getJSONFiles(VARIANT_FOLDER_PATH)) {
    const ICON_METADATA: IconMetadata = JSON.parse(
      readFileSync(path.join(VARIANT_FOLDER_PATH, iconFileJSON), "utf-8"),
    )

    console.log(ICON_METADATA)
  }
}
