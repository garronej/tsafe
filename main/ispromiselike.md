# isPromiseLike

With this function we can check if its argument is like a `Promise`. In other words, if its argument has a method that is named `then`.

## Quick example

```typescript
const simulateNetworkDelay = new Promise<void>(resolve =>
	setTimeout(resolve, 1000)
);

const result = isPromiseLike(simulateNetworkDelay);

//result === true;
```

## Complementary example

If we have an object that has a method named `then`:

```typescript
const objPromiseLike = {
	then: () => null,
	x: 3,
	y: 4,
};

const result = isPromiseLike(objPromiseLike);

//result === true;
```
