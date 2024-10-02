/* eslint-disable @typescript-eslint/no-explicit-any */
/** Return a function to use as Array.prototype.filter argument
 * to exclude one or many primitive value element from the array.
 * Ex: ([ "a", "b", "c" ] as const).filter(exclude("a")) return ("b" | "c")[]
 * Ex: ([ "a", "b", "c", "d"] as const).filter(exclude(["a", "b"]) gives ("c" | "d")[]
 */
function exclude(target) {
    const test = target instanceof Object
        ? element => target.indexOf(element) < 0
        : element => element !== target;
    return function (elemnt) {
        return test(elemnt);
    };
}

export { exclude };
//# sourceMappingURL=exclude.mjs.map
