/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Flip the value of a boolean without having to reference it twice
 * after running flip(x.y, "z") x.y.z !== x.y.z,
 * https://docs.tsafe.dev/flip
 */
export function flip(object, prop) {
    if (object[prop] === undefined) {
        return;
    }
    return (object[prop] = !object[prop]);
}
//# sourceMappingURL=flip.mjs.map