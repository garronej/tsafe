# isAmong

Let's say we have an union type like:  \


{% code title="Names.ts" %}
```typescript
export const names = ["foo", "bar", "baz"] as const;
export type Name = typeof names[number];
```
{% endcode %}

isAmong enables to test if a given values is one of the names

```typescript
import { isAmong } from "tsafe";
import { names, type Names } from "./Names";

declare value: "foo" | "bar" | "something else";

if( isAmong(names, value) ){
  // Here value is of type "foo" | "bar"
  // (the intesection of the type of value before the test and Name)
}
```

If we just have the type and not the exhausive array:

```typescript
import { assert, type Equals, isAmong } from "tsafe";
import type { Names } from "./Names";

const names = ["foo", "bar", "baz"] as const;

assert<Equals<typeof names, Names>>;

declare value: string;

if( isAmong(names, value) ){
   // Here value is of type Names
}
```
