---
description: >-
  Returns a function that you can use as the argument for Array.prototype.filter
  to exclude one or more primitive values from an array.
---

# exclude

## Example:

```typescript
const arr = ["a", "b", "c", "d"] as const;
const newArr = arr.filter(exclude(["a", "b"]));

//type of newArr is ("c" | "d")[]
//value of newArr is ["c", "d"]
```

