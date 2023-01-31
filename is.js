"use strict";
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.is = void 0;
var assertIsRefWrapper_1 = require("./zz_internal/assertIsRefWrapper");
var errorMessage = [
    "Wrong usage of the ".concat(is.name, " function refer to"),
    "https://docs.tsafe.dev/".concat(is.name.toLowerCase()),
].join(" ");
function is(_value) {
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
exports.is = is;
//# sourceMappingURL=is.js.map