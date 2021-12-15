---
description: Runtime implementation of the Capitalize helper type.
---

# 👍 capitalize

Capitalize a string, return the correct typing using [templates literals](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#template-literal-types).

```typescript
import { capitalize } from "tsafe/capitalize";

const str= "hello world";

// captializedStr is of type "Hello world" and captializedStr === "Hello world"
const captializedStr = capitalize(str);
```
