// const { babel } = require("@rollup/plugin-babel");
const commonjs = require("@rollup/plugin-commonjs");
const terser = require("@rollup/plugin-terser");

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
  plugins: [commonjs(), terser()],
};
