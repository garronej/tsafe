---
description: flip a boolean type
---

# Not

```typescript
import type { Not } from "tsafe";

type A = Not<true>; // A is of type false
type B = Not<false>; // B is of type true
```

Essentially though to use with:

{% content-ref url="equals.md" %}
[equals.md](equals.md)
{% endcontent-ref %}
