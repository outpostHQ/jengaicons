import fs from "fs";
import path from "path";

async function main() {
  /**
   * command format
   * jengaicons <path-to-folders-with-svgs>
   */
  const args = process.argv.slice(2);

  if (args.length === 0) {
    throw new Error("No path provided");
  }

  const pathToAssets = args[0];

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
  for (const items of itemsInDirectory) {
    fs.mkdirSync(path.join(pathToOptimized, items.name));
  }

  for (const item of itemsInDirectory) {
    const variant = item.name;

    const svgFiles = fs
      .readdirSync(path.join(pathToAssets, item.name), {
        withFileTypes: true,
      })
      .filter((file) => file.name.endsWith(".svg"))
      .map((item) => item.name);

    for (const svgFile of svgFiles) {
      const svgString = fs.readFileSync(
        path.join(pathToAssets, item.name, svgFile),
        "utf8"
      );

      // create file in optimized folder
      const componentName = svgFile.replace(".svg", "");
      const reactComponent = `import React from "react";
function ${componentName}() {
    return (
        ${svgString}
    )
}`;
      fs.writeFileSync(
        path.join(pathToOptimized, variant, svgFile.replace(".svg", ".tsx")),
        reactComponent
      );
    }
  }
}

main().catch((e) => console.log(e.message));
