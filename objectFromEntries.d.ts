/** https://docs.tsafe.dev/objectFromEntries */
export declare function objectFromEntries<Entry extends readonly [string, any]>(entries: readonly Entry[]): {
    [Key in Entry[0]]: Extract<Entry, readonly [Key, any]>[1];
};
/** Return type of objectFromEntries https://docs.tsafe.dev/objectFromEntries */
export type ObjectFromEntries<Entry extends readonly [string, any]> = {
    [Key in Entry[0]]: Extract<Entry, readonly [Key, any]>[1];
};
