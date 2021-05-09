---
description: >-
  a collection of very simple function and helper type that enables developers
  to take full advantage of what TypeScript can offer.
---

# What is tsafe?

Powerful features like [assertion functions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions) or [user-defined type guards](https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards) are only useful if paired with utility functions. TypeScript, however, only exports type helpers \(e.g. `Record`, `RetunType`, etc.\). `tsafe` is here to export _«the missing builtins»_ such as the assert function.

tsafe also tries to make TypeScript more practical by patching frustrating aspect of to the built-in function see RetunType for example.  


{% hint style="info" %}
tsafe is both a NPM and a Deno module
{% endhint %}

### How is is different from `ts-toolbelt`

There is two main difference:

* tsafe exports type helpers and function, ts-toolbelt only exports types.
* tsafe only expose functions and type helper that are of practical use in very common usecases. 

However the two library can be used together, one is not ment to replace the other. 

