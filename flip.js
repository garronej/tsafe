"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flip = flip;
/**
 * Flip the value of a boolean without having to reference it twice
 * after running flip(x.y, "z") x.y.z !== x.y.z,
 * https://docs.tsafe.dev/flip
 */
function flip(object, prop) {
    if (object[prop] === undefined) {
        return;
    }
    return (object[prop] = !object[prop]);
}
//# sourceMappingURL=flip.js.map