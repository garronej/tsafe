// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isPromiseLike(o) {
    return typeof (o === null || o === void 0 ? void 0 : o.then) === "function";
}
//# sourceMappingURL=isPromiseLike.mjs.map