/** @see <https://docs.tsafe.dev/capitalize#uncapitalize> */
export function uncapitalize<S extends string>(str: S): Uncapitalize<S> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (str.charAt(0).toLowerCase() + str.slice(1)) as any;
}
