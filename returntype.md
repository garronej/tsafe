---
description: Like the builtin helper but more convenient to use.
---

# ReturnType

There is two major pain point with [the default ReturnType](https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype):

### Used with async function

If you have a function like:

```typescript
type Shape = {};
async function getShape(): Promise<Shape> {
	return {};
}
```

And you are trying to extract `Shape`, when you use the default return type:

```typescript
type shape = ReturnType<typeof getShape>;
//    ^ shape is Promise<Shape> 😤
```

With `tsafe`'s ReturnType

```typescript
import type { ReturnType } from "tsafe";

type shape = ReturnType<typeof getShape>;
//    ^ shape is Shape 😊
```

### Used with function that can be `undefined`

Let's say we have an interface defined as such:

```typescript
export type Api = {
	getShape?: () => Shape;
};
```

And we want to extract the type `Shape`, using the default `ReturnType` we have to do:

```typescript
type shape = ReturnType<NonNullable<Api["getShape"]>>;
```

With the ReturnType of `tsafe` you don't need `NonNullable`

```typescript
import type { ReturnType } from "tsafe";

type shape = ReturnType<Api["getShape"]>;
```
