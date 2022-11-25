/** https://docs.tsafe.dev/returntype */
export declare type ReturnType<T extends ((...args: any[]) => unknown) | undefined | null | false | ""> = T extends (...args: any[]) => infer R ? (R extends PromiseLike<infer J> ? J : R) : never;
