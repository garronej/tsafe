/** https://docs.tsafe.dev/parameters */
export type Parameters<T extends ((...args: any[]) => unknown) | null | undefined | false | ""> = T extends (...args: infer P) => any ? P : never;
