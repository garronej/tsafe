/* eslint-disable @typescript-eslint/ban-types */
import type { Equals, Not } from "../index.ts";
import { assert } from "../assert.ts";

type A = { foo: string };
type B = { foo: number };

//@ts-expect-error: A is not equal to B
assert<Equals<A, B>>();

assert<Not<Equals<A, B>>>();
