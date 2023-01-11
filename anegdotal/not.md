---
description: flip a boolean type
---

# Not

```typescript
import type { Not } from "tsafe";

type A = Not<true>; // A is of type false
type B = Not<false>; // B is of type true
```

Usually for use with:

{% page-ref page="../main/equals.md" %}
