/** Always return null but pretends it returns an object of type T */
export function Reflect<T>(): T {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return null as any;
}
