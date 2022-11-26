/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { assertIsRefWrapper } from "./zz_internal/assertIsRefWrapper";
var errorMessage = [
    "Wrong usage of the " + is.name + " function refer to",
    "https://docs.tsafe.dev/" + is.name.toLowerCase(),
].join(" ");
export function is(_value) {
    var ref = {};
    if (assertIsRefWrapper.ref !== undefined) {
        assertIsRefWrapper.ref = undefined;
        throw new Error(errorMessage);
    }
    assertIsRefWrapper.ref = ref;
    Promise.resolve().then(function () {
        if (assertIsRefWrapper.ref === ref) {
            throw new Error(errorMessage);
        }
    });
    return null;
}
//# sourceMappingURL=is.js.map