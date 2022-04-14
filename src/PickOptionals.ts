type OptionalKeyof<T extends Record<string, unknown>> = Exclude<
    {
        [Key in keyof T]: T extends Record<Key, T[Key]> ? never : Key;
    }[keyof T],
    undefined
>;

/**
 * PickOptionals<{ p1: string; p2?: string; p3?: number; }>
 * is the type
 * { p2: string; p3: number; }
 */
export type PickOptionals<T extends Record<string, unknown>> = Required<Pick<T, OptionalKeyof<T>>>;
