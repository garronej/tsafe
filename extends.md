# Extends

There is the use-case of testing if _only_ certain TS types cover a special type definition.

```typescript
// a type that reflects functions and arrow functions
type Fn<A extends any[] = any[], R = any> = (...args: A) => R;
```

I need to ensure that only and only function cover the `Fn` type. E.g. `type Fn = any` would cover functions but also other types that are not intended to be expected. The existing type `Equals` is unsuitable for testing if types are inside or outside of a domain (read: a set of valid types).

Introducing an `Extends` type to tsafe would make it possible to assert that `Fn` covers the types we intend to cover and to ensure that other types are not covered (as expected).

👇👇👇

```typescript
type Extends<T1, T2> = T1 extends T2 ? true : false;
```

By having the following unit tests, we would ensure that the `Fn` type does not cover more types than expected.

```typescript
import { assert } from "tsafe/assert";
import { Extends, Not } from "tsafe";

type Fn<A extends any[] = any[], R = any> = (...args: A) => R;

function fn() {}

class A {}

assert<Extends<() => any, Fn>>();
assert<Extends<() => void, Fn>>();
assert<Extends<(...args: any[]) => any, Fn>>();
assert<Extends<typeof fn, Fn>>();
assert<Not<Extends<undefined, Fn>>>();
assert<Not<Extends<null, Fn>>>();
assert<Not<Extends<boolean, Fn>>>();
assert<Not<Extends<number, Fn>>>();
assert<Not<Extends<string, Fn>>>();
assert<Not<Extends<any[], Fn>>>();
assert<Not<Extends<object, Fn>>>();
assert<Not<Extends<A, Fn>>>();
```
