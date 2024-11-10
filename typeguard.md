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
import { typeGuard } from "tsafe";

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

Usage in conjonction with assert:

```typescript
import * as fs from "fs";
import { assert, type Equals, typeGuard } from "tsafe/assert";
import { z } from "zod";

type Person = {
    name: string;
    age: number;
};

const zPerson = z.object({
    name: z.string(),
    age: z.number()
});

assert<Equals<z.infer<typeof zPerson>, Person>>;

export function getAge(filePath: string): number {
    const person = JSON.parse(fs.readFileSync(filePath).toString("utf8")) as unknown;

    // After this statement typescripts knows that `person` is of type `Person`
    assert(typeGuard<Person>(person, zPerson.safeParse(person).success));

    return person.age;
}
```



## Use case 2: Helper for safely build other type guards

```typescript
import { typeGuard } from "tsafe";
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
