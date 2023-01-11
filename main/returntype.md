---
description: Like the builtin helper but more convenient to use.
---

# ReturnType

There is two major pain point with [the default ReturnType](https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype):

### Used with async function

If you have a function like:

```typescript
async function getShape(): Promise<Shape>;
```

And you are trying to extract `Shape`, when you use the default return type:

```typescript
const shape: ReturnType<typeof getShape>= ...
//    ^ shape is of type Promise<Shape> 😤
```

With `tsafe`'s ReturnType

```typescript
import type { ReturnType } from "tsafe";

const shape: ReturnType<typeof getShape>= ...
//    ^ shape is of type Shape 😊
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
const shape: ReturnType<NonNullable<Api["getShape"]>> = ...
```

With the ReturnType of `tsafe` you don't need `NonNullable`

```typescript
import type { ReturnType } from "tsafe";

const shape: ReturnType<Api["getShape"]> = ...
```
