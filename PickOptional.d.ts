/**
 * Like the 'Required' builtin type alias helper
 * but it only keeps properties that are marked optional.
 *
 * Example:
 *
 * Optional<{ p1: string; p2?: string; p3?: number; }>
 * is the type
 * { p2: string; p3: number }
 */
declare type OptionalKeyof<T extends Record<string, unknown>> = Exclude<{
    [Key in keyof T]: T extends Record<Key, T[Key]> ? never : Key;
}[keyof T], undefined>;
export declare type PickOptionals<T extends Record<string, unknown>> = {
    [Key in OptionalKeyof<T>]: T[Key];
};
export {};
