import type { Unite } from "./tools/Unite.mjs";
import type { StrictEquals } from "./tools/StrictEquals.mjs";
/** https://docs.tsafe.dev/main/equals */
export type Equals<A1, A2> = StrictEquals<Unite<A1>, Unite<A2>>;
