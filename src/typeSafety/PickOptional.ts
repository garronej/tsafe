import type { OptionalKeyof } from "./OptionalKeyof";

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

export type PickOptionals<T extends Record<string, unknown>> = {
    [Key in OptionalKeyof<T>]: T[Key];
};
