import { overwriteReadonlyProp } from "./lab/overwriteReadonlyProp";
export type { Equals } from "./Equals";

/** https://docs.tsafe.dev/assert#error-thrown */
export class AssertionError extends Error {
    originalMessage?: string;

    constructor(msg: string | undefined) {
        super(`Wrong assertion encountered` + (!msg ? "" : `: "${msg}"`));

        this.originalMessage = msg;

        Object.setPrototypeOf(this, new.target.prototype);

        if (!this.stack) {
            return;
        }

        try {
            overwriteReadonlyProp(
                this,
                "stack",
                this.stack
                    .split("\n")
                    .filter((...[, i]) => i !== 1 && i !== 2)
                    .join("\n"),
            );
        } catch {}
    }
}

let refOfIs: undefined | Record<string, never> = undefined;

/** https://docs.tsafe.dev/assert */
export function assert<_T extends true>(
    condition?: any,
    msg?: string | (() => string),
): asserts condition {
    if (arguments.length === 0) {
        condition = true;
    }
    if (refOfIs !== undefined) {
        refOfIs = undefined;
        return;
    }

    if (!condition) {
        throw new AssertionError(typeof msg === "function" ? msg() : msg);
    }
}

const errorMessage = "Wrong usage of the `is` function refer to https://docs.tsafe.dev/is";

/** https://docs.tsafe.dev/is */
export function is<T>(value: any): value is T {
    const ref = {};

    if (refOfIs !== undefined) {
        refOfIs = undefined;
        throw new Error(errorMessage);
    }

    refOfIs = ref;

    Promise.resolve().then(() => {
        if (refOfIs === ref) {
            throw new Error(errorMessage);
        }
    });

    return null as any;
}
