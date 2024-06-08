/** https://docs.tsafe.dev/isamong */
export declare function isAmong<Name extends string | number | boolean | null | undefined>(value: unknown, names: readonly Name[]): value is Name;
