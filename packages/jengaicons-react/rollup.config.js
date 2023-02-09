import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import includePaths from 'rollup-plugin-includepaths'
import typescript from '@rollup/plugin-typescript'
import clean from '@rollup-extras/plugin-clean'
import terser from '@rollup/plugin-terser'
import summary from 'rollup-plugin-summary'
import progress from 'rollup-plugin-progress'

let includePathOptions = {
  paths: ['./'],
  extensions: ['.js', '.ts', '.tsx', '.jsx'],
}

/**@type {rollup.RollupOptions} */
const prodConfig = {
  input: './src/index.tsx',
  output: {
    format: 'esm',
    sourcemap: false,
    dir: 'dist',
    preserveModules: true,
  },
  external: ['react', 'tslib'],
  plugins: [
    progress({
      clearLine: false, // default: true
    }),
    clean(),
    resolve(),
    includePaths(includePathOptions),
    typescript(),
    babel({
      babelHelpers: 'bundled',
      exclude: /node_modules/,
      extensions: ['.js', '.ts', '.jsx', '.tsx'],
    }),
    terser({
      ecma: '2015',
      module: true,
    }),
    summary({
      showBrotliSize: true,
      showGzippedSize: true,
      showMinifiedSize: true,
    }),
  ],
}

export default prodConfig
