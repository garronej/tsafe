/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/**
 * Removes the enumerable properties whose values are
 * undefined.
 *
 * Example:
 * noUndefined({ "foo": undefined, "bar": 3 }) returns
 * a new object { "bar": 3 }
 */
function noUndefined(obj) {
    const out = {};
    for (const key in obj) {
        if (obj[key] === undefined) {
            continue;
        }
        out[key] = obj[key];
    }
    return out;
}

export { noUndefined };
//# sourceMappingURL=noUndefined.mjs.map
