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
import type { Param0 } from "tsafe";

const props: Param0<typeof MyComponent>= ...;
```

It's kind of the same of doing:

```typescript
const props: Parameters<typeof MyComponent>[0]= ...;
```

but

```typescript
declare fun(): number;

type FunParams = Param0<typeof fun>;
//   ^void (instead of never)
```

and

```typescript
declare fun(params?: { foo: string; }): void;

type FunParams = Param0<typeof fun>;
//   ^ { foo: string; } ( instead of { foo: string; } | undefined )
```
