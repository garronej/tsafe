/* eslint-disable @typescript-eslint/ban-types */
import type { Equals } from "../index.ts";
import { assert } from "../assert.ts";

declare function theTestedFunction<Key extends string>(): Record<Key, string>;

const out = theTestedFunction<"foo" | "bar">();

assert<Equals<typeof out, { foo: string; bar: string }>>();
