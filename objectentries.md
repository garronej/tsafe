---
description: Like Object.entries() but with a better return type.
---

# objectEntries

Functionally equal to `Object.entries` but features a return type more precise than just `[string, T][].`

```typescript
import { assert, type Equals, objectEntries } from "tsafe";

//    v entries is of type ["a", string], ["b", number], ["c", boolean]
const entries = objectEntries({
	a: "foo",
	b: 33,
	c: true,
});

assert<
	Equals<typeof entries, (["a", string] | ["b", number] | ["c", boolean])[]>
>();
```

{% hint style="warning" %}
WARNING: [See `objectKeys()`'s warning](objectkeys.md).
{% endhint %}
