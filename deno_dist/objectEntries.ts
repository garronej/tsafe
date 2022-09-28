/* eslint-disable @typescript-eslint/no-explicit-any */

/** https://docs.tsafe.dev/objectentries */
export function objectEntries<O extends Record<string, any>>(
    o: O,
): { [Key in keyof O]: [Key, O[Key]] }[keyof O] {
    return Object.entries(o) as any;
}

/** Return type of objectEntries https://docs.tsafe.dev/objectentries */
export type ObjectEntries<O extends Record<string, any>> = { [Key in keyof O]: [Key, O[Key]] }[keyof O];
