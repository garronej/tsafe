---
description: Deprecated. Extract the packed type of a Promise
---

# 📉 UnpackPromise

{% hint style="danger" %}
In TypeScript 4.5 have been introduced the [`Awaited`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html#the-awaited-type-and-promise-improvements) type that does just what  UnpackPromise does.
{% endhint %}

```typescript
declare const prStr: Promise<string>;

//str is of type string
declare const str: UnpackPromise<typeof pr>;
```
