
/** Extract the return type of an async function */
export type AsyncReturnType<T extends ((...args: unknown[]) => Promise<unknown>) | null | undefined | false | ""> = 
    T extends (...args: unknown[]) => Promise<infer R> ? R : never;