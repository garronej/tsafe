import { Buffer } from "https://deno.land/std@0.166.0/node/buffer.ts";
import * as fs from "https://deno.land/std@0.166.0/node/fs.ts";
import { join as pathJoin } from "https://deno.land/std@0.166.0/node/path.ts";
import { getProjectRoot } from "../tools/getProjectRoot.ts";
import { exclude } from "../exclude.ts";
import { execSync } from "https://deno.land/std@0.166.0/node/child_process.ts";
import { same } from "https://raw.githubusercontent.com/garronej/evt/v2.3.0/deno_dist/tools/inDepth/same.ts";

const packageJsonFilePath = pathJoin(getProjectRoot(), "package.json");

const packageJsonParsed = JSON.parse(fs.readFileSync(packageJsonFilePath).toString("utf8"));

const srcDirPath = pathJoin(getProjectRoot(), "src");
const labDirPath = pathJoin(srcDirPath, "lab");

const newExports = {
    ".": {
        "require": `./${packageJsonParsed["main"]}`,
        "import": `./${packageJsonParsed["module"]}`,
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
    ...Object.fromEntries(
        fs
            .readdirSync(labDirPath)
            .filter(basename => {
                try {
                    execSync(`git ls-files --error-unmatch ${pathJoin(labDirPath, basename)}`, {
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
                `./lab/${name}`,
                { "require": `./dist/lab/${name}.js`, "import": `./dist/esm/lab/${name}.js` },
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
