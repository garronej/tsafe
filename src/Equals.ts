/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Unite } from "./tools/Unite";
import type { StrictEquals } from "./tools/StrictEquals";

/** https://docs.tsafe.dev/main/equals */
export type Equals<A1, A2> = StrictEquals<Unite<A1>, Unite<A2>>;

// Credit https://stackoverflow.com/a/52473108/3570903
