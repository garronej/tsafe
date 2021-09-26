---
description: Let you test if two types are equals
---

# Equals

It let you implement tests on your types.  To use with [`doExtends`](doextends.md)

```typescript
import { doExtends } from "tsafe/doExtends";
import type { Equals } from "tsafe";

type Got = ReturnType<typeof myFunction>;
type Expected = { foo: string; };

//You will get red squiggly line if Got isn't the same type as Expected.
doExtends<Equals<Got, Expected>, 1>();
```

### Example

```typescript
import type { Equals } from "tsafe";

type Test1 = Equals<{a: string}, {b: string}> // 0 
type Test2 = Equals<{ foo: string; }, { foo: string; }> // 1
type Test3 = Equals<{a: string}, {readonly a: string}> // 0
```

