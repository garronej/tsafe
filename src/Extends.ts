import type { StrictEquals } from "./tools/StrictEquals";

/** https://docs.tsafe.dev/main/extends */
export type Extends<A1, A2> = StrictEquals<A1, never> extends true
    ? StrictEquals<A2, never>
    : StrictEquals<never, A2> extends true
    ? false
    : A1 extends A2
    ? true
    : false;
