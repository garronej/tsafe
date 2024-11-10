/** Always return null but pretends it returns an object of type T */
export function Reflect<T>(): T {
    return null as any;
}
