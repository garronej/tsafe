/**
 * Example: 
 * OptionalPropertiesOf<{ foo: string; bar?: string; baz?: number }> 
 * is the type:  "bar" | "baz"
 */
export type OptionalPropertiesOf<T extends object> = Exclude<{
    [K in keyof T]: T extends Record<K, T[K]>
    ? never
    : K
}[keyof T], undefined>;