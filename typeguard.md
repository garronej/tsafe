# typeGuard

Aims at making the most of the [`value is T`](https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards) statement.

Implementation:

```typescript
export function typeGuard<T>(value: any, isMatched: boolean): value is T {
	return isMatched;
}
```

## Use case 1: Tell the compiler what assertion can be made on a given variable if a given test returns true.

```typescript
import { typeGuard } from "tsafe/typeGuard";

type Circle = { type: "CIRCLE"; radius: number };
type Square = { type: "SQUARE"; sideLength: number };
type Shape = Circle | Square;

declare const shape: Shape;

if (typeGuard<Circle>(shape, shape.type.startsWith("C"))) {
	//The developer knows the shape is is a CIRCLE,
	//TypeScript can't tell but trusts the developer.
	shape.radius;
} else {
	shape.sideLength;
}
```

## Use case 2: Helper for safely build other type guards

```typescript
import { typeGuard } from "tsafe/typeGuard";
type SetLike<T> = { values: () => {} };

export function matchSetLike<T>(set: any): set is SetLike<T> {
	return (
		set instanceof Object &&
		typeGuard<SetLike<T>>(set, true) &&
		typeof set.values === "function" &&
		/Set/.test(Object.getPrototypeOf(set).constructor.name)
	);
}
```
