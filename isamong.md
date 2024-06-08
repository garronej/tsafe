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
import { isAmong } from "tsafe/isAmong";
import { names, type Names } from "./Names";

declare value: string;

if( isAmong(value, names) ){
   // Here typescript knows that value is of type Name
}
```

If we just have the type and not the exhausive array:

```typescript
import { isAmong } from "tsafe/isAmong";
import { assert, type Equals } from "tsafe/assert";
import type { Names } from "./Names";

declare value: string;

if( isAmong(value, ["foo", "bar", "baz"]) ){
   assert<Equals<typeof value, Names>>();
   // Here typescript knows that value is of type Name
   // And we'll get an error in the type assertion line if 
   // we forgot to list one of the values of the union type.  
}
```
