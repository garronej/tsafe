/**
 * https://docs.tsafe.dev/exclude
 *
 * Return a function to use as Array.prototype.filter argument
 * to exclude one or many primitive value element from the array.
 * Ex: ([ "a", "b", "c" ] as const).filter(exclude("a")) return ("b" | "c")[]
 * Ex: ([ "a", "b", "c", "d"] as const).filter(exclude(["a", "b"]) gives ("c" | "d")[]
 */
export function exclude<T extends string | number | null | undefined | boolean>(
    target: readonly T[] | T,
) {
    const test: (element: any) => boolean =
        target instanceof Object
            ? element => target.indexOf(element) < 0
            : element => element !== target;

    return function <U>(element: U): element is Exclude<U, T> {
        return test(element);
    };
}
