import { overwriteReadonlyProp } from './lab/overwriteReadonlyProp.mjs';

/** https://docs.tsafe.dev/assert#error-thrown */
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
        }
        catch { }
    }
}
let refOfIs = undefined;
/** https://docs.tsafe.dev/assert */
function assert(condition, msg) {
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
function is(value) {
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
    return null;
}

export { AssertionError, assert, is };
//# sourceMappingURL=assert.mjs.map
