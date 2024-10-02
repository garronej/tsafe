const typescript = require("rollup-plugin-typescript2");
const glob = require("glob");

module.exports = {
    input: glob.sync("src/**/*.ts"), // Use glob pattern to include all .ts files
    output: {
        dir: "dist/esm",
        format: "esm",
        sourcemap: true,
        entryFileNames: "[name].mjs",
        preserveModules: true, 
        preserveModulesRoot: "src", 
        sourcemapPathTransform: relativeSourcePath => 
             relativeSourcePath.replace(/^..\//, "")
    },
    plugins: [
        typescript({
            tsconfig: "./tsconfig.esm.json",
            sourceMap: true,
        }),
    ],
};

