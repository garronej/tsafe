---
description: Like Object.fromEntries() but with a better return type
---

# objectFromEntries

Functionally identical to `Object.fromEntries()` but instead of returning but its return type more precise than just `{ [k: sting]: any; }`.

```typescript
import { assert, Equals } from "tsafe";
import { objectFromEntries } from "tsafe/objectFromEntries";

const entries = [
	["a", "foo"],
	["b", 33],
	["c", true as boolean],
] as const;

const obj = objectFromEntries(entries);
//    ^ obj is of type { a: "foo"; b: 33; c: boolean; }

assert<
	Equals<
		typeof obj,
		{
			a: "foo";
			b: 33;
			c: boolean;
		}
	>
>();
```
