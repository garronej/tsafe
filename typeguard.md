# typeGuard

Aims at making the most of the [`value is T`](https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards) statement.

Imlementation:

```typescript
export function typeGuard<T>(value: any, isMatched = true): value is T {
    return isMatched;
}
```

## Usecase 1: Used with assert

See [assert](assert.md#assert-typeguard)

## Usecase 2: Tell the compiler what assertion can be made on a given variable if a given test returns true.

Example

```typescript
type Circle = { type: "CIRCLE"; radius: number; };
  type Square = { type: "SQUARE"; sideLength: number; };
  type Shape = Circle | Square;
 
  declare const shape: Shape;
 
  if( typeGuard<Circle>(shape, shape.type.startsWith("C")) ){
      //The devlopers knows the shape is is a CIRCLE,
      //TypeScript can't tell but trusts the developper.
      shape.radius;
  }else{
      shape.sideLength;
  }
 
```

## Usecase 3: Helper for safely build other type guards

Example

```typescript
 export function matchSetLike<T>(set: any): set is SetLike<T> {
      return (
          set instanceof Object &&
          typeGuard<SetLike<T>>(set) &&
          typeof set.values === "function" &&
          /Set/.test(Object.getPrototypeOf(set).constructor.name)
      );
  }
```



