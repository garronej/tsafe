/* eslint-disable @typescript-eslint/no-unused-vars */
import { overwriteReadonlyProp } from "./lab/overwriteReadonlyProp";
import { assertIsRefWrapper } from "./zz_internal/assertIsRefWrapper";
export type { Equals } from "./Equals";

/** @see <https://docs.tsafe.dev/assert#error-thrown> */
export class AssertionError extends Error {
    constructor(msg: string | undefined) {
        super(`Wrong assertion encountered` + (!msg ? "" : `: "${msg}"`));

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
            // eslint-disable-next-line no-empty
        } catch {}
    }
}

/** https://docs.tsafe.dev/assert */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function assert<_T extends true>(condition?: any, msg?: string): asserts condition {
    if (arguments.length === 0) {
        condition = true;
    }
    if (assertIsRefWrapper.ref !== undefined) {
        assertIsRefWrapper.ref = undefined;
        return;
    }

    if (!condition) {
        throw new AssertionError(msg);
    }
}
