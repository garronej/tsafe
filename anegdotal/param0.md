---
description: Get a function's first parameter
---

# Param0

Parameter of a function are often passed wrapped into an object, React props is a notable example:

```typescript
function MyComponent(props: Props) {
	return <>...</>;
}
```

To extract `Props` you can use:

```typescript
import type { Param0 } from "tsafe";

const props: Param0<typeof MyComponent>= ...;
```

Instead of

```typescript
const props: Parameters<typeof MyComponent>[0]= ...;
```
