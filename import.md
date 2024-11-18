---
description: Recommended way to import tsafe
---

# ⚙️ How to import

### Node / Browser

```typescript
import { assert, type Equals, typeGuard } from "tsafe";
// NOTE: You can also cherry pick imports, example: 
// import { assert, is, type Equals } from "tsafe/assert";
// import { typeGuard } from "tsafe/typeGuard";
```

### Deno

`/deps.ts`

```typescript
export { assert, type Equals } from "https://deno.land/x/tsafe@v0.7.3/mod.ts";
```

```typescript
import { assert, type Equals } from "./deps.ts";
```
