---
description: Recommended way to import tsafe
---

# ⚙️ How to import

### Node / Browser

```typescript
import { assert, type Equals } from "tsafe";
// NOTE: You can also cherry pick imports, example: 
// import { assert } from "tsafe/assert";

```

### Deno

`/deps.ts`

```typescript
export { assert, type Equals } from "https://deno.land/x/tsafe@v0.7.3/mod.ts";
```

```typescript
import { assert, type Equals } from "./deps.ts";
```
