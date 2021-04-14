

/** Return a function to use as Array.prototype.filter argument
 * to exclude one or many primitive value element from the array.
 * Ex: ([ "a", "b" ] as const).filter(exclude("a") return "b"[]
 */
export function exclude<T extends string | number | null | undefined | boolean>(target: readonly T[] | T) {

    const test: (element: any) => boolean =
        target instanceof Object ?
            (element => target.indexOf(element) < 0) :
            (element => element !== target)
        ;

    return function <U>(str: U): str is Exclude<U, T> {
        return test(str);
    }
}







