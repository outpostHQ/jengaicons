import resolve from "@rollup/plugin-node-resolve"
import includePaths from "rollup-plugin-includepaths"
import typescript from "rollup-plugin-typescript2"
import terser from "@rollup/plugin-terser"
import summary from "rollup-plugin-summary"
import progress from "rollup-plugin-progress"
import externals from "rollup-plugin-node-externals"
import { rimrafSync } from "rimraf"

rimrafSync("dist")

let includePathOptions = {
  paths: ["./"],
  extensions: [".js", ".ts", ".tsx", ".jsx"],
}

/**@type {import('rollup').RollupOptions} */
const prodConfig_CJS = {
  input: "./src/index.tsx",
  output: {
    format: "cjs",
    sourcemap: false,
    dir: "dist",
    preserveModules: true,
  },

  external: [/node_modules/],
  plugins: [
    progress({
      clearLine: false, // default: true
    }),
    externals({
      deps: true,
      devDeps: true,
    }),
    includePaths(includePathOptions),
    resolve(),
    typescript({
      tsconfig: "tsconfig-cjs.json",
    }),
    terser(),
    summary({
      showBrotliSize: true,
      showGzippedSize: true,
      showMinifiedSize: true,
    }),
  ],
}

const prodConfig_ESM = {
  input: "./src/index.tsx",
  output: {
    format: "esm",
    sourcemap: false,
    dir: "dist",
    preserveModules: true,
    entryFileNames: "[name].mjs",
  },

  external: [/node_modules/],
  plugins: [
    progress({
      clearLine: false, // default: true
    }),
    externals({
      deps: true,
      devDeps: true,
    }),
    includePaths(includePathOptions),
    resolve(),
    typescript({
      tsconfig: "tsconfig-esm.json",
    }),
    terser(),
    summary({
      showBrotliSize: true,
      showGzippedSize: true,
      showMinifiedSize: true,
    }),
  ],
}

export default [prodConfig_CJS, prodConfig_ESM]
