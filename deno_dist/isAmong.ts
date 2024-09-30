/** https://docs.tsafe.dev/isamong */
export function isAmong<Name extends string | number | boolean | null | undefined>(
    names: readonly Name[],
    value: unknown,
): value is Name {
    for (const name of names) {
        if (name === value) {
            return true;
        }
    }
    return false;
}
