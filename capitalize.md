---
description: Runtime implementation of the Capitalize helper type.
---

# capitalize/uncapitalize

### `capitalize()`

<pre class="language-typescript"><code class="lang-typescript"><strong>import { assert, Equals } from "tsafe";
</strong><strong>import { capitalize } from "tsafe/capitalize";
</strong>
const str= "foo";

const capitalizedStr = capitalize(str);

assert&#x3C;Equals&#x3C;typeof  capitalizedStr, "Foo">>();
assert( capitalizedStr === "Foo");

//NOTE: There is a 'Capitalize' builtin type in TypeScript such that:
assert&#x3C;Equals&#x3C;
     Capitalize&#x3C;"foo">, "Foo"
>>();</code></pre>

### `uncapitalize()`

<pre class="language-typescript"><code class="lang-typescript"><strong>import { assert, Equals } from "tsafe";
</strong><strong>import { uncapitalize } from "tsafe/uncapitalize";
</strong>
const  capitalizedStr= "Foo";

const str = uncapitalize(str);

assert&#x3C;Equals&#x3C;typeof str, "foo">>();
assert(str === "foo");

//NOTE: There is a 'Uncapitalize' builtin type in TypeScript such that:
assert&#x3C;Equals&#x3C;
    Uncapitalize&#x3C;"Foo">, "foo"
>>();</code></pre>
