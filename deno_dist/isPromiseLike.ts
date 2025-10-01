export function isPromiseLike<T = void>(o: any): o is PromiseLike<T> {
    return typeof o === "object" && o !== null && "then" in o && typeof o.then === "function";
}
