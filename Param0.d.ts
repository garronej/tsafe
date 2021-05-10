import type { Parameters } from "./Parameters";
/** Shorthand for Parameters<typeof f>[0] https://docs.tsafe.dev/param0 */
export declare type Param0<T extends ((...args: any[]) => unknown) | null | undefined | false | ""> = Parameters<T>[0];
