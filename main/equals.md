---
description: Let you test if two types are the same
---

# Equals

```typescript
import type { Equals, Not } from "tsafe";
import { assert } from "tsafe/assert";

type A = { foo: string; } | undefined;
type B = undefined | { foo: string; };

//You will get red squiggly line if A isn't the same type as B.
assert<Equals<A, B>>();

//You will get red squiggly line if A and B are the same type.
assert<Not<Equals<A,B>>(); //<- red squiggly line here
```

### Example use-cases

#### Testing the types definition of your API

Here we test that the return type of our function is actually what we expect it to be.

```typescript
import type { Equals } from "tsafe";
import { assert } from "tsafe/assert";


declare function theTestedFunction<Key extends string>(): Record<Key, string>;

const out = theTestedFunction<"foo" | "bar">();

assert<Equals<typeof out, { foo: string; bar: string; }>>();
```

{% hint style="info" %}
If you are writing test for your type, you definitely want to checkout [`//@ts-expect-error`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html#-ts-expect-error-comments)
{% endhint %}

#### Making sure you have deconstructed all the params

```typescript
import type { Equals } from "tsafe";
import { assert } from "tsafe/assert";


function myFunction(
	params: {
		foo: string;
		bar: string;
		baz: string;
	}
) {

	const { foo, bar, baz, ...rest } = params;

	//We check that whe have deconstructed all the parameters.
	assert<Equals<typeof rest, {}>>();

	//...

}
```

