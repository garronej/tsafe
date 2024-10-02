"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.exclude = void 0;
/** Return a function to use as Array.prototype.filter argument
 * to exclude one or many primitive value element from the array.
 * Ex: ([ "a", "b", "c" ] as const).filter(exclude("a")) return ("b" | "c")[]
 * Ex: ([ "a", "b", "c", "d"] as const).filter(exclude(["a", "b"]) gives ("c" | "d")[]
 */
function exclude(target) {
    var test = target instanceof Object
        ? function (element) { return target.indexOf(element) < 0; }
        : function (element) { return element !== target; };
    return function (elemnt) {
        return test(elemnt);
    };
}
exports.exclude = exclude;
//# sourceMappingURL=exclude.js.map