/** https://docs.tsafe.dev/objectKeys */
export function objectKeys<T extends Record<string, unknown>>(o: T): (keyof T & string)[] {
    return Object.keys(o) as any;
}
