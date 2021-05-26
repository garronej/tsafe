/* eslint-disable @typescript-eslint/no-explicit-any */

/** https://docs.tsafe.dev/returntype */
export type ReturnType<T extends ((...args: any[]) => unknown) | undefined | null | false | ""> =
    T extends (...args: any[]) => infer R ? (R extends PromiseLike<infer J> ? J : R) : never;

// ReturnType<(()=> Promise<string> | number) | undefined> = (()=> Promise<string> | number) | undefined extends (...args: any[]) => infer R ?
//                                                         = ( ()=> Promise<string> | number extends (...args: any[]) => infer R ? ) | (undefined extends (...args: any[]) => infer R ? )
//                                                         = ( Promise<string> | number extends PromiseLike<infer J> ? )             | never
//                                                         =   Promise<string> | number extends PromiseLike<infer J> ?
//                                                         =   ( Promise<string> extends PromiseLike<infer J> ?) | ( number extends PromiseLike<infer J> ?)
//                                                         =   string                                           |   number
