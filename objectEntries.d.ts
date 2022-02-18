/** https://docs.tsafe.dev/objectentries */
export declare function objectEntries<O extends Record<string, any>>(o: O): {
    [Key in keyof O]: [Key, O[Key]];
}[keyof O];
/** Return type of objectEntries https://docs.tsafe.dev/objectentries */
export declare type ObjectEntries<O extends Record<string, any>> = {
    [Key in keyof O]: [Key, O[Key]];
}[keyof O];
