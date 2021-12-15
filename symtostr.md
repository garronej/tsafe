---
description: Get the name of a symbol as typed string string.
---

# 🌟 symToStr

```typescript
import { symToStr } from "tsafe/symToStr";

declare const foo: any;

//str is of type "foo" and str === "foo"
const str= symToStr({ foo });
```

#### Without `symToStr`

```typescript
export const myFunctionX = ()=> { ... };

export const name = "myFunctionX";
```

If you happen to rename \`myFunctionX\` into something else it is easy to forget to rename the exported name as well.

#### With `symToStr`

```typescript


export const myFunctionX = ()=> {...};

export const name = symToStr({ myFunctionX });
//           ^name is of type "myFunctionX"
```
