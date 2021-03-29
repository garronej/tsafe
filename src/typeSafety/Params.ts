
import type { Parameters } from "./Parameters";

/** Shorthand for Parameters<typeof f>[0] */
export type Params<T extends ((arg: any) => any) | null | undefined | false | ""> = Parameters<T>[0];