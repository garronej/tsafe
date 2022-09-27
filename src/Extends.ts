import { StrictEquals } from "./tools/StrictEquals";

/** https://docs.tsafe.dev/main/extends */
export type Extends<A1, A2> = StrictEquals<A1, never> extends true ? true : A1 extends A2 ? true : false;
