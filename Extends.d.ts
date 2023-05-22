import { StrictEquals } from "./tools/StrictEquals";
/**
 * @see <https://docs.tsafe.dev/main/extends>
 *
 * Usage example: assert<Extends<A, B>>();
 **/
export type Extends<A1, A2> = StrictEquals<A1, never> extends true ? true : StrictEquals<A2, never> extends true ? false : StrictEquals<A2, any> extends true ? true : StrictEquals<A2, unknown> extends true ? true : StrictEquals<A1, any> extends true ? false : StrictEquals<A1, unknown> extends true ? false : A1 extends A2 ? true : false;
