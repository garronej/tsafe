export function withDefaults<
    T extends Record<string, unknown>,
    U extends keyof T,
    V,
    W extends { [Key in keyof Omit<T, U>]: T[Key] } & { [Key in U]?: T[U] }
>(
    f: (params: T) => V,
    injectedParams: U extends T ? never : { [Key in U]: T[Key] },
): (params: { [Key in keyof W]: W[Key] }) => V {
    return params => f({ ...injectedParams, ...params });
}
