"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
Object.defineProperty(exports, "__esModule", { value: true });
exports.noUndefined = void 0;
/**
 * Removes the enumerable properties whose values are
 * undefined.
 *
 * Example:
 * noUndefined({ "foo": undefined, "bar": 3 }) returns
 * a new object { "bar": 3 }
 */
function noUndefined(obj) {
    var out = {};
    for (var key in obj) {
        if (obj[key] === undefined) {
            continue;
        }
        out[key] = obj[key];
    }
    return out;
}
exports.noUndefined = noUndefined;
//# sourceMappingURL=noUndefined.js.map