// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isPromiseLike<T = void>(o: any): o is PromiseLike<T> {
    return typeof o === "object" && o !== null && "then" in o && typeof o.then === "function";
}
