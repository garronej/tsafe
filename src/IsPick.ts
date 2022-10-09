/* eslint-disable @typescript-eslint/no-explicit-any */
import { StrictEquals } from "./tools/StrictEquals";

/**
 * IsPick<{ p1: string; p2?: string; }, { p1: string; p2?: string; p3?: number; p4: string; }>
 * Checks if type X is Pick<Y, K> of type Y, where K is any set of properties of type Y
 */
export type IsPick<A1, A2 extends A1> = StrictEquals<A1, Pick<A2, keyof A1>> extends true
    ? true
    : false;
