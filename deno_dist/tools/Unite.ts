export type Unite<T> = T extends Record<string, unknown> ? { [Key in keyof T]: T[Key] } : T;
