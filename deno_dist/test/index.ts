const __dirname = (() => {
    const { url: urlStr } = import.meta;
    const url = new URL(urlStr);
    const __filename = (url.protocol === "file:" ? url.pathname : urlStr)
        .replace(/[/][^/]*$/, '');

    const isWindows = (() => {

        let NATIVE_OS: typeof Deno.build.os = "linux";
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const navigator = (globalThis as any).navigator;
        if (globalThis.Deno != null) {
            NATIVE_OS = Deno.build.os;
        } else if (navigator?.appVersion?.includes?.("Win") ?? false) {
            NATIVE_OS = "windows";
        }

        return NATIVE_OS == "windows";

    })();

    return isWindows ?
        __filename.split("/").join("\\").substring(1) :
        __filename;
})();

const __filename = (() => {
    const { url: urlStr } = import.meta;
    const url = new URL(urlStr);
    const __filename = (url.protocol === "file:" ? url.pathname : urlStr);

    const isWindows = (() => {

        let NATIVE_OS: typeof Deno.build.os = "linux";
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const navigator = (globalThis as any).navigator;
        if (globalThis.Deno != null) {
            NATIVE_OS = Deno.build.os;
        } else if (navigator?.appVersion?.includes?.("Win") ?? false) {
            NATIVE_OS = "windows";
        }

        return NATIVE_OS == "windows";

    })();

    return isWindows ?
        __filename.split("/").join("\\").substring(1) :
        __filename;
})();

//This will not run on deno, we need a separate test runner for Deno (./mod.ts).

import * as child_process from "https://deno.land/std@0.85.0/node/child_process.ts";
import * as path from "https://deno.land/std@0.85.0/node/path.ts";
import { Deferred } from "https://raw.githubusercontent.com/garronej/evt/v1.10.1/deno_dist/tools/Deferred.ts";

const names = ["withDefault", "flip", "objectKeys", "isPromiseLike", "assertIs", "exclude"];

(async () => {
    if (!!process.env.FORK) {
        process.once("unhandledRejection", error => {
            throw error;
        });

        require(process.env.FORK);

        return;
    }

    for (const name of names) {
        console.log(`Running: ${name}`);

        const dExitCode = new Deferred<number>();

        child_process
            .fork(__filename, undefined, {
                "env": { "FORK": path.join(__dirname, name) },
            })
            .on("message", console.log)
            .once("exit", code => dExitCode.resolve(code ?? 1));

        const exitCode = await dExitCode.pr;

        if (exitCode !== 0) {
            console.log(`${name} exited with error code: ${exitCode}`);
            process.exit(exitCode);
        }

        console.log("\n");
    }
})();
