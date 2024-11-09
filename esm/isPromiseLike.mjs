// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isPromiseLike(o) {
    return typeof o === "object" && o !== null && "then" in o && typeof o.then === "function";
}

export { isPromiseLike };
//# sourceMappingURL=isPromiseLike.mjs.map
