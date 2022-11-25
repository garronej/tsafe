/* eslint-disable @typescript-eslint/no-explicit-any */

/** https://docs.tsafe.dev/objectKeys */
export function objectKeys<T extends Record<string, unknown>>(o: T): (keyof T)[] {
    return Object.keys(o) as any;
}
