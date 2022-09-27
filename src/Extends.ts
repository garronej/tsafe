/* eslint-disable @typescript-eslint/no-explicit-any */
import { StrictEquals } from "./tools/StrictEquals";

/** https://docs.tsafe.dev/main/extends */
export type Extends<A1, A2> = StrictEquals<A1, never> extends true
    ? true
    : StrictEquals<A2, never> extends true
    ? false
    : StrictEquals<A1, any> extends true
    ? StrictEquals<A2, any>
    : A1 extends A2
    ? true
    : false;
