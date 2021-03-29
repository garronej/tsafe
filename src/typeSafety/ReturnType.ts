
/**
 * Obtain the return type of a function type 
 * ...(event if the function type can be nullish).
 * Better that the default because prevent from having to do ReturnType<NonNullable<typeof f>>
 */
export type ReturnType<T extends ((...args: any) => any) | undefined | null | false | ""> = 
    T extends (...args: any) => infer R ? R : never;
