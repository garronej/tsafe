---
description: Recommended way to import tsafe
---

# ⚙ How to import

## Browsers

On the browser bundle size must be kept in check, it is best to only import what you'll use.

```typescript
import { assert } from "tsafe/assert";
import { typeGuard } from "tsafe/typeGuard";
//Type can be imported from the index
import type { ReturnType } from "tsafe";
```

## CLI Runtime

If you are in Node or on Deno, bundle size is irrelevant, you should use a single import.

### Node

```typescript
import { assert, typeGuard } from "tsafe";
import type { ReturnType } from "tsafe";
```

### Deno

`/deps.ts`

```typescript
export { assert, typeGuard } from "https://deno.land/x/tsafe@v0.7.3/mod.ts";
export type { ReturnType } from "https://deno.land/x/tsafe@v0.7.3/mod.ts";
```

```typescript
import { assert, typeGuard } from "./deps.ts";
import type { ReturnType } from "./deps.ts";
```
