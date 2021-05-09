# What is tsafe?

tsafe is a collection of very simple function and helper type that enables developers to take full advantage of what TypeScript can offers. 

Powerfull features like assertion functions or user defined type guard are only usefull if paired with utility functions. TypeScript however only exports type helper \(eg. Record, RetunType, ect...\).  tsafe is here to remedy this cituation by exprting «the missing builtins» such as the assert function. 

tsafe also tries to make TypeScript more practical by patching frustrating aspect of to the builtin function see RetunType for example.

{% hint style="info" %}
tsafe is both a NPM and a Deno module
{% endhint %}

### How is is different from `ts-toolbelt`

There is two main difference:

* tsafe exports type helpers and function, ts-toolbelt only exports types.
* tsafe only expose functions and type helper that are of practical use in very common usecases. 

However the two library can be used together, one is not ment to replace the other. 

