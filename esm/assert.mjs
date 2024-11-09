import { overwriteReadonlyProp } from './lab/overwriteReadonlyProp.mjs';
import { assertIsRefWrapper } from './zz_internal/assertIsRefWrapper.mjs';

/* eslint-disable @typescript-eslint/no-unused-vars */
/** @see <https://docs.tsafe.dev/assert#error-thrown> */
class AssertionError extends Error {
    constructor(msg) {
        super(`Wrong assertion encountered` + (!msg ? "" : `: "${msg}"`));
        this.originalMessage = msg;
        Object.setPrototypeOf(this, new.target.prototype);
        if (!this.stack) {
            return;
        }
        try {
            overwriteReadonlyProp(this, "stack", this.stack
                .split("\n")
                .filter((...[, i]) => i !== 1 && i !== 2)
                .join("\n"));
            // eslint-disable-next-line no-empty
        }
        catch { }
    }
}
/** https://docs.tsafe.dev/assert */
function assert(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
condition, msg) {
    if (arguments.length === 0) {
        condition = true;
    }
    if (assertIsRefWrapper.ref !== undefined) {
        assertIsRefWrapper.ref = undefined;
        return;
    }
    if (!condition) {
        throw new AssertionError(typeof msg === "function" ? msg() : msg);
    }
}

export { AssertionError, assert };
//# sourceMappingURL=assert.mjs.map
