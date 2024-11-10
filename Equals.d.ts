import type { Unite } from "./tools/Unite";
import type { StrictEquals } from "./tools/StrictEquals";
/** https://docs.tsafe.dev/main/equals */
export type Equals<A1, A2> = StrictEquals<Unite<A1>, Unite<A2>>;
