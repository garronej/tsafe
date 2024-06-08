/* eslint-disable @typescript-eslint/no-explicit-any */

import type { Parameters } from "./Parameters";

type NonUndefined<T> = T extends undefined ? never : T;

/** Shorthand for Parameters<typeof f>[0] https://docs.tsafe.dev/param0 */
export type Param0<T extends ((...args: any[]) => unknown) | null | undefined | false | ""> = [
    Parameters<T>,
] extends [never]
    ? never
    : Parameters<T> extends []
      ? void
      : NonUndefined<Parameters<T>[0]>;
