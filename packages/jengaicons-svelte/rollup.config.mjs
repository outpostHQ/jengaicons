import summary from "rollup-plugin-summary"
import progress from "rollup-plugin-progress"
import externals from "rollup-plugin-node-externals"
import { rimrafSync } from "rimraf"
import { swc, defineRollupSwcOption } from "rollup-plugin-swc3"
import swcPreserveDirectives from "rollup-swc-preserve-directives"

import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

rimrafSync("dist")

const SWC_OPTIONS = defineRollupSwcOption({
  minify: true,
  jsc: {
    baseUrl: __dirname,
  },
})

/**@type {import('rollup').RollupOptions} */
const prodConfig_CJS = {
  input: "./src/index.tsx",
  output: {
    format: "cjs",
    sourcemap: false,
    dir: "dist/cjs",
    preserveModules: true,
    strict: false,
  },

  external: [/node_modules/],
  plugins: [
    progress({
      clearLine: true,
    }),
    externals({
      deps: true,
      devDeps: true,
    }),
    swc(SWC_OPTIONS),
    swcPreserveDirectives(),
    summary({
      showBrotliSize: true,
      showGzippedSize: true,
      showMinifiedSize: true,
    }),
  ],
}

/**@type {import('rollup').RollupOptions} */
const prodConfig_ESM = {
  input: "./src/index.tsx",
  output: {
    format: "esm",
    sourcemap: false,
    dir: "dist/esm",
    preserveModules: true,
    entryFileNames: "[name].mjs",
  },
  external: [/node_modules/],
  plugins: [
    progress({
      clearLine: true,
    }),
    externals({
      deps: true,
      devDeps: true,
    }),
    swc(SWC_OPTIONS),
    swcPreserveDirectives(),
    summary({
      showBrotliSize: true,
      showGzippedSize: true,
      showMinifiedSize: true,
    }),
  ],
}

export default [prodConfig_CJS, prodConfig_ESM]
