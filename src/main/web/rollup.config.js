import copy from "rollup-plugin-copy";
import { terser } from "rollup-plugin-terser";
import resolve from '@rollup/plugin-node-resolve';


const distDir = "../resources/META-INF/resources";

// terser()
export default [
  {
    input: "./app.js",
    output: [
      { file: `${distDir}/app.js`, format: "iife", plugins: [] },
    ],
    plugins: [resolve(), copy({ targets: [{ src: "index.html", dest: distDir }] })],
  },
];
