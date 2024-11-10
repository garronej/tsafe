"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPromiseLike = isPromiseLike;
function isPromiseLike(o) {
    return typeof o === "object" && o !== null && "then" in o && typeof o.then === "function";
}
//# sourceMappingURL=isPromiseLike.js.map