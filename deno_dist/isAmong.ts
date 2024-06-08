/** https://docs.tsafe.dev/isamong */
export function isAmong<Name extends string | number | boolean | null | undefined>(
    value: unknown,
    names: readonly Name[],
): value is Name {
    for (const name of names) {
        if (name === value) {
            return true;
        }
    }
    return false;
}
