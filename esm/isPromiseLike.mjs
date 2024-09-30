// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isPromiseLike(o) {
    return typeof o === "object" && o !== null && "then" in o && typeof o.then === "function";
}
//# sourceMappingURL=isPromiseLike.mjs.map