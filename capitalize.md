---
description: Runtime implementation of the Capitalize helper type.
---

# capitalize/uncapitalize

### `capitalize()`

```typescript
import { assert, type Equals, capitalize } from "tsafe";

const str = "foo";

const capitalizedStr = capitalize(str);

assert<Equals<typeof capitalizedStr, "Foo">>();
assert(capitalizedStr === "Foo");

//NOTE: There is a 'Capitalize' builtin type in TypeScript such that:
assert<Equals<Capitalize<"foo">, "Foo">>;
```

### `uncapitalize()`

```typescript
import { assert, type Equals, uncapitalize } from "tsafe";

const capitalizedStr = "Foo";

const str = uncapitalize(capitalizedStr);

assert<Equals<typeof str, "foo">>();
assert(str === "foo");

//NOTE: There is a 'Uncapitalize' builtin type in TypeScript such that:
assert<Equals<Uncapitalize<"Foo">, "foo">>;
```
