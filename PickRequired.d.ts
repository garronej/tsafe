import { PickOptionals } from "./PickOptionals";
/**
 * PickRequired<{ p1: string; p2?: string; p3?: number; p4: string; }>
 * is the type
 * { p1: string; p4: number; }
 */
export type PickRequired<T extends Record<string, unknown>> = Omit<T, keyof PickOptionals<T>>;
