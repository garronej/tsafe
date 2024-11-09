/** Return a function to use as Array.prototype.filter argument
 * to exclude one or many primitive value element from the array.
 * Ex: ([ "a", "b", "c" ] as const).filter(exclude("a")) return ("b" | "c")[]
 * Ex: ([ "a", "b", "c", "d"] as const).filter(exclude(["a", "b"]) gives ("c" | "d")[]
 */
export declare function exclude<T extends string | number | null | undefined | boolean>(target: readonly T[] | T): <U>(elemnt: U) => elemnt is Exclude<U, T>;
