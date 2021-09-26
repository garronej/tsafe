---
description: Asserts some type do extends a given other.
---

# doExtends

This is a noOp with two type parameters. It enables us to statically ensure that the first parameter argument extends the second parameter argument.

## Implementation

```typescript
function doExtends<T extends U, U>(): T | U | void {};
```

If `doExtends<T, U>()`does not show an error, it means that `T extends U`.

## Example

```typescript
doExtends<"foo" | "bar", string>();
```

If we pass as the first type argument, a type that does not extend the second type argument, red squiggles will appear, as illustrated below.

![](../.gitbook/assets/screenshot-2021-05-26-at-18.51.04.png)

