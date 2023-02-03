import fs from "fs";
import path from "path";
import { optimize } from "svgo";
import { transform } from "@svgr/core";

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
  const pathToOptimized = path.join(root, "packages/jengaicons-react", "icons");
  const allDirs = fs.readdirSync(path.join(pathToOptimized, ".."));
  if (allDirs.includes("icons")) {
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

      /**
       * Optimize the svg, this will remove all the unnecessary
       */
      const optimizedSvgString = optimize(svgString, { path: pathToOptimized });

      /**
       * create file in optimized folder
       */
      const componentName = `${svgFile.replace(
        ".svg",
        ""
      )}${variant[0].toUpperCase()}${variant.slice(1)}`;

      let safeComponentName = componentName.replace(".", "");
      safeComponentName = safeComponentName.replace("-", "");
      safeComponentName = safeComponentName.replace(" ", "");
      safeComponentName = safeComponentName.replace("&", "");

      /**
       * Transform the svg to react component,
       * and add whatever props are required
       */
      const componentTransformConfig: Parameters<typeof transform>[1] = {
        exportType: "named",
        namedExport: safeComponentName,
        typescript: true,
        icon: true,
        prettier: true,
        svgProps: {
          width: "32",
          height: "32",
          viewBox: "0 0 32 32",
        },
      };

      /**
       * SVG generated component with export statement
       */
      const svgComponent = await transform(
        optimizedSvgString.data,
        componentTransformConfig,
        { componentName: safeComponentName }
      );

      /**
       * Write the component to the optimized folder
       */

      fs.writeFileSync(
        path.join(pathToOptimized, variant, `${safeComponentName}.tsx`),
        svgComponent
      );

      fs.appendFileSync(
        path.join(pathToOptimized, variant, "index.ts"),
        `export { ${safeComponentName} } from "./${safeComponentName}";\n`
      );
    }
  }
}

main().catch((e) => console.log(e.message));
