---
description: Like Object.keys() but with a better return type
---

# objectKeys

Functionally identical to `Object.keys()` except that the return type ain't just `string` but a typed array.

```typescript
    const obj = {
        "a": 1,
        "b": "ok",
        "c": null,
    };

    //    v keys is an array of "a", "b", "c"
    const keys = objectKeys({
        "a": 1
        "b": 2
        "c": 3
    });

    assert<Equals<typeof keys, ("a" | "b" | "c")[]>>();
```

{% hint style="warning" %}
WARNING: Only use with object you have instantiated yourself. Some keys that are not in the type might be present on the object at runtime!&#x20;

```typescript
const o = { p: 33, k: "ok", r: boolean };
const x = objectKeys<{ p: number; k: string }>(o);
//x is of type ("p" | "k")[] but actually x === ["p", "k", "r"]
```

{% endhint %}
