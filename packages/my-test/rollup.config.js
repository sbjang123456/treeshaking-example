const { babel } = require("@rollup/plugin-babel");
const commonjs = require("@rollup/plugin-commonjs");
const terser = require("@rollup/plugin-terser");
const resolve = require("@rollup/plugin-node-resolve").default;

module.exports = {
  input: "src/index.js",
  output: [
    {
      file: "dist/index.js",
      format: "cjs", // commonjs
    },
    {
      file: "dist/index.mjs",
      format: "es", // esm, module
    },
  ],
  plugins: [
    resolve({
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    commonjs(),
    babel({
      babelHelpers: "bundled",
      // exclude: "node_modules/**",
    }),
  ],
};
