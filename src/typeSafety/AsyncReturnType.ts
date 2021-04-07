/* eslint-disable @typescript-eslint/no-explicit-any */

/** Extract the return type of an async function */

export type AsyncReturnType<T extends ((...args: any[]) => Promise<unknown>) | null | undefined | false | ""> = 
    T extends (...args: any[])=> Promise<infer U> ? U : never;