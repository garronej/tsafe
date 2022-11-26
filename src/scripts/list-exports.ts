import * as fs from "fs";
import { join as pathJoin } from "path";
import { getProjectRoot } from "../tools/getProjectRoot";
import { exclude } from "../exclude";
import { execSync } from "child_process";
import { same } from "evt/tools/inDepth/same";

const packageJsonFilePath = pathJoin(getProjectRoot(), "package.json");

const packageJsonParsed = JSON.parse(fs.readFileSync(packageJsonFilePath).toString("utf8"));

const srcDirPath = pathJoin(getProjectRoot(), "src");

const newExports = {
    ".": {
        "require": `./${packageJsonParsed["module"]}`,
        "import": `./esm/${packageJsonParsed["module"]}`,
    },
    ...Object.fromEntries(
        fs
            .readdirSync(srcDirPath)
            .filter(basename => {
                try {
                    execSync(`git ls-files --error-unmatch ${pathJoin(srcDirPath, basename)}`, {
                        "stdio": [],
                    });
                } catch {
                    return false;
                }

                return true;
            })
            .map(basename => {
                const match = basename.match(/^([^.]+)\.tsx?$/);

                if (match === null) {
                    return undefined;
                }

                return match[1];
            })
            .filter(exclude(undefined))
            .filter(exclude("index"))
            .sort()
            .reverse()
            .map(name => [
                `./${name}`,
                { "require": `./dist/${name}.js`, "import": `./dist/esm/${name}.js` },
            ]),
    ),
};

if (same(packageJsonParsed["exports"], newExports)) {
    process.exit(0);
}

fs.writeFileSync(
    packageJsonFilePath,
    Buffer.from(
        JSON.stringify(
            {
                ...packageJsonParsed,
                "exports": newExports,
            },
            null,
            2,
        ),
        "utf8",
    ),
);
