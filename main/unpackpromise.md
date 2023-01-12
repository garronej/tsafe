---
description: Extract the packed type of a Promise
---

# UnpackPromise

```typescript
declare const prStr: Promise<string>;

//str is of type string
declare const str: UnpackPromise<typeof pr>;
```
