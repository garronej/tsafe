import type { Unite } from "./tools/Unite";
import type { StrictEquals } from "./tools/StrictEquals";

// Credit https://stackoverflow.com/a/53808212/3731798
/** https://docs.tsafe.dev/main/equals */
export type Equals<A1, A2> = StrictEquals<Unite<A1>, Unite<A2>>;

// TODO: To export and document, this type can be used in place of equals if the types to compare have no `any` in them.
// (I think but some more testing is needed)
// export type LooseEquals<T, U> = T extends U ? (U extends T ? true : false) : false;
