---
description: >-
  Returns a function that you can use as the argument for Array.prototype.filter
  to exclude one or more primitive values from an array.
---

# exclude

## Example:



```typescript
import { exclude } from "tsafe/exclude";

const arr = ["a", "b", "c", "d"] as const;
const newArr = arr.filter(exclude("a"));

//type of newArr is ("b" | "c" | "d")[]
//value of newArr is ["b", "c", "d"]
```

You can also exclude more than on element: 

```typescript
import { exclude } from "tsafe/exclude";

const arr = ["a", "b", "c", "d"] as const;
const newArr = arr.filter(exclude(["a", "b"]));

//type of newArr is ("c" | "d")[]
//value of newArr is ["c", "d"]
```

