/* eslint-disable @typescript-eslint/no-explicit-any */
export {};
// ReturnType<(()=> Promise<string> | number) | undefined> = (()=> Promise<string> | number) | undefined extends (...args: any[]) => infer R ?
//                                                         = ( ()=> Promise<string> | number extends (...args: any[]) => infer R ? ) | (undefined extends (...args: any[]) => infer R ? )
//                                                         = ( Promise<string> | number extends PromiseLike<infer J> ? )             | never
//                                                         =   Promise<string> | number extends PromiseLike<infer J> ?
//                                                         =   ( Promise<string> extends PromiseLike<infer J> ?) | ( number extends PromiseLike<infer J> ?)
//                                                         =   string                                           |   number
//# sourceMappingURL=ReturnType.mjs.map