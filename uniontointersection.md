# UnionToIntersection

```typescript

type A = { foo: string; };
type B = { bar: number; };

type Got = UnionToIntersection<A | B>;
type Expected = A & B;

assert<Equals<Got,Expected>>();
```

Example:

```typescript
import type { UnionToIntersection } from "tsafe";

const o1= {
  "p1": { "a": "foo" },
  "p2": { "b": "foo", "c": "foo" }
};

const o2: UnionToIntersection<(typeof o1)[keyof typeof o1]> = {} as any;

objectKeys(o1).forEach(key=> Object.assign(o2, o1[key]));

//o2 is of type { a: string; b: string; c: string; }
```

_Credit goes to_ [_jcalz_](https://stackoverflow.com/users/2887218/jcalz) _for this type,_ [_see SO answer_](https://stackoverflow.com/a/50375286/3731798)_._
