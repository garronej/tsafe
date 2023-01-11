# Parameters

Same as [the builtin-type](https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype) but works also with nullable function type. Analogous to [`ReturnType`](returntype.md#used-with-function-that-can-be-undefined).

```typescript
import type { Parameters } from "tsafe/Parameters";

declare const myFunction: (a: string) => void | null;

type args = Parameters<typeof myFunction>;
// ^ args is [a: string]
```
