/* eslint-disable @typescript-eslint/ban-types */
import type { Equals } from "..";
import { assert } from "../assert";

type A = { foo: string } | undefined;
type B = undefined | { foo: string };

assert<Equals<A, B>>();
