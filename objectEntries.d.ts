/** https://docs.tsafe.dev/objectentries */
export declare function objectEntries<O extends Record<string, any>>(o: O): Exclude<{
    [Key in keyof O]: [Key, O[Key]];
}[keyof O], undefined>[];
/** Return type of objectEntries https://docs.tsafe.dev/objectentries */
export type ObjectEntries<O extends Record<string, any>> = Exclude<{
    [Key in keyof O]: [Key, O[Key]];
}[keyof O], undefined>[];
