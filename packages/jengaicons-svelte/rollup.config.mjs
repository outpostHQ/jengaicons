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
const prodConfig = {
  input: "./src/index.js",
  output: {
    format: "esm",
    sourcemap: false,
    dir: "dist",
    preserveModules: true,
    entryFileNames: "[name].js",
  },

  external: (id) => {
    return /node_modules/.test(id) || id.endsWith('.svelte')
  },
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

export default prodConfig
