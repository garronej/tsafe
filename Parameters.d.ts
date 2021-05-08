/**
 * Obtain the parameters of a function type in a tuple
 * ...(event if the function type can be nullish).
 * Better that the default because prevent from having to do Parameters<NonNullable<typeof f>>
 */
export declare type Parameters<T extends ((...args: any[]) => unknown) | null | undefined | false | ""> = T extends (...args: infer P) => any ? P : never;
