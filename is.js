"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.is = is;
var assertIsRefWrapper_1 = require("./zz_internal/assertIsRefWrapper");
var errorMessage = [
    "Wrong usage of the ".concat(is.name, " function refer to"),
    "https://docs.tsafe.dev/".concat(is.name.toLowerCase()),
].join(" ");
/** https://docs.tsafe.dev/is */
function is(value) {
    var ref = {};
    if (assertIsRefWrapper_1.assertIsRefWrapper.ref !== undefined) {
        assertIsRefWrapper_1.assertIsRefWrapper.ref = undefined;
        throw new Error(errorMessage);
    }
    assertIsRefWrapper_1.assertIsRefWrapper.ref = ref;
    Promise.resolve().then(function () {
        if (assertIsRefWrapper_1.assertIsRefWrapper.ref === ref) {
            throw new Error(errorMessage);
        }
    });
    return null;
}
//# sourceMappingURL=is.js.map