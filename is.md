# is

is is meant to be used in conjunction with assert and enable you to tell the compiler:

"_Trust me this `value` is of type `T`"_ or "_Trust me this `value` is not of type `T`_"

![](https://user-images.githubusercontent.com/6702424/118082020-c2e5dd80-b3bc-11eb-9ea9-71fa8206f704.gif)

```typescript
import { assert, is } from "tsafe/assert";

type Circle = { radius: number };
type Square = { sideLength: number };
type Shape = Circle | Square;

declare const shape: Shape;

//You: Trust me TypeScript, I know that shape is a Circle.
assert(is<Circle>(shape));

//TypeScript: Ok if you say so...it has a radius then.
shape.radius;
```

Equally useful you can tell TypeScript that your shape is not a `Square`, it will infer that, it is then a `Circle`.

```typescript
//You: Trust me TypeScript, I know that shape is not a Square.
assert(!is<Square>(shape));

//TypeScript: Ok so by elimination it should be a Circle!
shape.radius;
```

{% hint style="danger" %}
`is` must **always** be used in conjunction with [`assert`](assert.md) as described in the example above.

You aren't even allowed to do something like `assert(is<Circle>(shape) && shape.radius > 100 )`

For any other use case consider[`typeGuard`](typeguard.md) instead.
{% endhint %}

{% hint style="warning" %}
It is important to understand that here that when you run the instruction `assert(typeGuard<Circle>(shape))` if the shape happens not to be a Circle you won't get an error at runtime.
{% endhint %}
