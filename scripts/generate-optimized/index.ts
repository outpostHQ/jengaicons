import fs from "fs";
import path from "path";
import { optimize } from "svgo";

/**
 * This script is for generating optimized svgs at the root level
 */
async function main() {
  /**
   * command format
   * jengaicons <path-to-folders-with-svgs>
   */
  const args = process.argv.slice(2);

  if (args.length === 0) {
    throw new Error("No path provided");
  }

  const [pathToAssets] = args;

  // get all the directories in the assets directory
  const itemsInDirectory = fs
    .readdirSync(pathToAssets, { withFileTypes: true })
    .filter((item) => item.isDirectory());

  // prepare the optimized svgs
  // remove any exisitng optimized folder
  const root = path.join(pathToAssets, "..");
  const pathToOptimized = path.join(root, "optimized");

  const allDirs = fs.readdirSync(root);
  if (allDirs.includes("optimized")) {
    fs.rmSync(pathToOptimized, { recursive: true });
  }

  // create new empty optimized folder
  fs.mkdirSync(pathToOptimized);
  for (const { name: fontVariant } of itemsInDirectory) {
    fs.mkdirSync(path.join(pathToOptimized, fontVariant));
  }

  for (const item of itemsInDirectory) {
    const variant = item.name;

    const svgFiles = fs
      .readdirSync(path.join(pathToAssets, variant), {
        withFileTypes: true,
      })
      .filter((file) => file.name.endsWith(".svg"))
      .map((item) => item.name);

    for (const svgFile of svgFiles) {
      const svgFileName = svgFile.split("-")[0].trim() + ".svg";
      const svgString = fs.readFileSync(
        path.join(pathToAssets, variant, svgFile),
        "utf8"
      );

      /**
       * Optimize the svg, this will remove all the unnecessary
       */
      const optimizedSvgString = optimize(svgString, { path: pathToOptimized });

      /**
       * Write the component to the optimized folder
       */
      fs.writeFileSync(
        path.join(pathToOptimized, variant, svgFileName),
        optimizedSvgString.data
      );
    }
  }
}

main().catch((e) => console.log(e.message));
