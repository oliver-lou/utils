import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { readFileSync } from 'node:fs'
import ts from 'rollup-plugin-typescript2'
import dts from 'rollup-plugin-dts'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
// import json from '@rollup/plugin-json'
// import alias from '@rollup/plugin-alias'
// import esbuild from 'rollup-plugin-esbuild'
// import babel from '@rollup/plugin-babel'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const pkg = JSON.parse(
  readFileSync(resolve(__dirname, `package.json`), 'utf-8')
)

// ensure TS checks only once for each build
let hasTSChecked = true

const tsPlugin = ts({
  check: !hasTSChecked,
  tsconfig: resolve(__dirname, './tsconfig.json'),
})

const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * Copyright (c) ${new Date().getFullYear()} oliver_lou
 * @license MIT
 */`

const plugins = [
  nodeResolve({
    preferBuiltins: true
  }),
  // alias(),
  // json(),
  // dts(),
  tsPlugin,
  commonjs(),
  // esbuild()
]

const globals = {
  qs: 'qs',
}

export default [
  {
    input: 'src/node.ts',
    plugins,
    output: [
      {
        file: 'dist/oliver_lou-utils.node.esm.js',
        format: 'es',
        banner,
        globals,
      },
      {
        file: 'dist/oliver_lou-utils.node.cjs.js',
        format: 'cjs',
        banner,
        globals,
      }
    ]
  },
  {
    input: 'src/browser.ts',
    plugins,
    output: [
      {
        file: 'dist/oliver_lou-utils.browser.esm.js',
        format: 'es',
        banner,
        globals,
      },
      // {
      //   file: 'dist/oliver_lou-utils.node.cjs.js',
      //   format: 'cjs',
      //   banner,
      // }
    ]
  }
];