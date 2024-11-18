"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noUndefined = noUndefined;
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
//# sourceMappingURL=noUndefined.js.map