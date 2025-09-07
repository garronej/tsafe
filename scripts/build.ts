import * as child_process from "child_process";
import * as fs from "fs";
import { join as pathJoin } from "path";
import { assert } from "tsafe/assert";
import { transformCodebase } from "./tools/transformCodebase";

const startTime = Date.now();

const projectDirPath = pathJoin(__dirname, "..");
const distDirPath_root = pathJoin(projectDirPath, "dist");

if (fs.existsSync(distDirPath_root)) {
    fs.rmSync(distDirPath_root, { recursive: true });
}

for (const targetFormat of ["cjs", "esm"] as const) {
    run(`npm run build:${targetFormat}`);
}

fs.rmSync(pathJoin(distDirPath_root, "tsconfig.tsbuildinfo"));

{
    let modifiedPackageJsonContent = fs
        .readFileSync(pathJoin(projectDirPath, "package.json"))
        .toString("utf8");

    modifiedPackageJsonContent = (() => {
        const o = JSON.parse(modifiedPackageJsonContent);

        for (const propertyName of ["scripts", "lint-staged", "husky", "devDependencies"]) {
            assert(propertyName in o);
            delete o[propertyName];
        }

        delete o.files;

        return JSON.stringify(o, null, 4);
    })();
    modifiedPackageJsonContent = JSON.stringify(
        {
            ...JSON.parse(modifiedPackageJsonContent),
            "main": "index.js",
            "types": "index.d.ts",
            "module": "esm/index.mjs",
            "exports": {
                ".": {
                    "require": "./index.js",
                    "import": "./esm/index.mjs",
                    "types": "./index.d.ts",
                },
                ...(() => {
                    const names = fs
                        .readdirSync(pathJoin(projectDirPath, "src"))
                        .filter(name => name.endsWith(".ts"))
                        .filter(name => name !== "index.ts")
                        .map(nameWithExt => nameWithExt.slice(0, -3));

                    return Object.fromEntries(
                        names.map(name => [
                            `./${name}`,
                            {
                                "require": `./${name}.js`,
                                "import": `./esm/${name}.mjs`,
                                "types": `./${name}.d.ts`,
                            },
                        ]),
                    );
                })(),
                "./lab": {
                    "require": "./lab/index.js",
                    "import": "./esm/lab/index.mjs",
                    "types": "./lab/index.d.ts",
                },
                ...(() => {
                    const names = fs
                        .readdirSync(pathJoin(projectDirPath, "src", "lab"))
                        .filter(name => name.endsWith(".ts"))
                        .filter(name => name !== "index.ts")
                        .map(nameWithExt => nameWithExt.slice(0, -3));

                    return Object.fromEntries(
                        names.map(name => [
                            `./lab/${name}`,
                            {
                                "require": `./lab/${name}.js`,
                                "import": `./esm/lab/${name}.mjs`,
                                "types": `./lab/${name}.d.ts`,
                            },
                        ]),
                    );
                })(),
                "./tools": {
                    "require": "./tools/index.js",
                    "import": "./esm/tools/index.mjs",
                    "types": "./tools/index.d.ts",
                },
                ...(() => {
                    const names = fs
                        .readdirSync(pathJoin(projectDirPath, "src", "tools"))
                        .filter(name => name.endsWith(".ts"))
                        .filter(name => name !== "index.ts")
                        .map(nameWithExt => nameWithExt.slice(0, -3));

                    return Object.fromEntries(
                        names.map(name => [
                            `./tools/${name}`,
                            {
                                "require": `./tools/${name}.js`,
                                "import": `./esm/tools/${name}.mjs`,
                                "types": `./tools/${name}.d.ts`,
                            },
                        ]),
                    );
                })(),
            },
        },
        null,
        4,
    );

    fs.writeFileSync(
        pathJoin(distDirPath_root, "package.json"),
        Buffer.from(modifiedPackageJsonContent, "utf8"),
    );

    for (const basename of ["README.md", "LICENSE"]) {
        fs.cpSync(pathJoin(projectDirPath, basename), pathJoin(distDirPath_root, basename));
    }
}

transformCodebase({
    srcDirPath: pathJoin(projectDirPath, "src"),
    destDirPath: pathJoin(distDirPath_root, "src"),
});

transformCodebase({
    srcDirPath: distDirPath_root,
    destDirPath: distDirPath_root,
    transformSourceCode: ({ filePath, sourceCode }) => {
        if (filePath.endsWith(".js.map")) {
            const sourceMapObj = JSON.parse(sourceCode.toString("utf8"));

            sourceMapObj.sources = sourceMapObj.sources.map((source: string) =>
                source.startsWith("../src/")
                    ? source.replace("..", ".")
                    : source.replace("../src", "src"),
            );

            const modifiedSourceCode = Buffer.from(JSON.stringify(sourceMapObj), "utf8");

            return {
                modifiedSourceCode,
            };
        }

        return {
            modifiedSourceCode: sourceCode,
        };
    },
});

console.log(`✓ built in ${((Date.now() - startTime) / 1000).toFixed(2)}s`);

function run(command: string) {
    console.log(`$ ${command}`);
    child_process.execSync(command, { stdio: "inherit" });
}
