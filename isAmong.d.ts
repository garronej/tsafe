/** https://docs.tsafe.dev/isamong */
export declare function isAmong<Name extends string | number | boolean | null | undefined>(names: readonly Name[], value: unknown): value is Name;
