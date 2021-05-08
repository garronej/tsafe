/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Obtain the return type of a function type
 * ...(event if the function type can be nullish).
 * Better that the default because prevent from having to do ReturnType<NonNullable<typeof f>>
 */
export type ReturnType<
    T extends ((...args: any[]) => unknown) | undefined | null | false | ""
> = T extends (...args: any[]) => infer R ? (R extends PromiseLike<infer J> ? J : R) : never;

// ReturnType<(()=> Promise<string> | number) | undefined> = (()=> Promise<string> | number) | undefined extends (...args: any[]) => infer R ?
//                                                         = ( ()=> Promise<string> | number extends (...args: any[]) => infer R ? ) | (undefined extends (...args: any[]) => infer R ? )
//                                                         = ( Promise<string> | number extends PromiseLike<infer J> ? )             | never
//                                                         =   Promise<string> | number extends PromiseLike<infer J> ?
//                                                         =   ( Promise<string> extends PromiseLike<infer J> ?) | ( number extends PromiseLike<infer J> ?)
//                                                         =   string                                           |   number
