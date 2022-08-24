/* eslint-disable @typescript-eslint/ban-types */
import type { Equals } from "../index.ts";
import { assert } from "../assert.ts";

type A = { foo: string } | undefined;
type B = undefined | { foo: string };

assert<Equals<A, B>>();
