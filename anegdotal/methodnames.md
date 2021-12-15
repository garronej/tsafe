---
description: >-
  This utility type takes an Api interface as type argument and returns a union
  type of all the property names whose values are functions.
---

# MethodNames

## Example:

```typescript
type T = {
    x: number;
    y: number;
    method1(): void;
    method2(): void;
};

type TMethodNames = MethodNames<T>;

//resulting type is: "method1" | "method2"
```

The result will be the same if one or more of the methods are optional.

```typescript
type T = {
    x: number;
    y: number;
    method1(): void;
    method2?(): void;
};

type TMethodNames = MethodNames<T>;

//resulting type is: "method1" | "method2"
```
