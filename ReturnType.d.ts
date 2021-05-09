/**
 * Obtain the return type of a function type
 * ...(event if the function type can be nullish).
 * Better that the default because prevent from having to do ReturnType<NonNullable<typeof f>>
 */
export declare type ReturnType<T extends ((...args: any[]) => unknown) | undefined | null | false | ""> = T extends (...args: any[]) => infer R ? (R extends PromiseLike<infer J> ? J : R) : never;
