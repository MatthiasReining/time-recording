// import copy from "rollup-plugin-copy";
// import { terser } from "rollup-plugin-terser";
import nodeResolve from "@rollup/plugin-node-resolve";
import scss from 'rollup-plugin-scss'

const distDir = "../resources/META-INF/resources";
const webModulesDir = "./src/web_modules";

// terser()
export default [
  {
    input: 'scss/entry.js',   
    plugins: [
      scss({sourceMap: true})
    ]
  },
  
  {
    input: [
      './node_modules/lit-html/lit-html.js',
      './node_modules/i18next/dist/esm/i18next.js',
    ],
    output: { dir: "./src/web_modules", format: "es" },
    plugins: [nodeResolve({ browser: true })],
  },
  /*
  {
    input: "./app.js",
    output: [
      { file: `${distDir}/app.js`, format: "iife", plugins: [] },
    ],
    plugins: [nodeResolve(), copy({ targets: [{ src: "index.html", dest: distDir }] })],
  },
  */
];
