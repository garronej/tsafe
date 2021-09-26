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

