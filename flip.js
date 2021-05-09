"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.flip = void 0;
function flip(object, prop) {
    if (object[prop] === undefined) {
        return;
    }
    return (object[prop] = !object[prop]);
}
exports.flip = flip;
//# sourceMappingURL=flip.js.map