/**
 * Example:
 * OptionalKeyof<{ foo: string; bar?: string; baz?: number }>
 * is the type:  "bar" | "baz"
 */

export type OptionalKeyof<T extends Record<string, unknown>> = Exclude<
    {
        [Key in keyof T]: T extends Record<Key, T[Key]> ? never : Key;
    }[keyof T],
    undefined
>;
