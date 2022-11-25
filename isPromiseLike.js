"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPromiseLike = void 0;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isPromiseLike(o) {
    return typeof (o === null || o === void 0 ? void 0 : o.then) === "function";
}
exports.isPromiseLike = isPromiseLike;
//# sourceMappingURL=isPromiseLike.js.map