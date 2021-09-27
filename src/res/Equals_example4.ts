/* eslint-disable @typescript-eslint/ban-types */
import type { Equals, Not } from "..";
import { assert } from "../assert";

type A = { foo: string };
type B = { foo: number };

//@ts-expect-error: A is not equal to B
assert<Equals<A, B>>();

assert<Not<Equals<A, B>>>();
