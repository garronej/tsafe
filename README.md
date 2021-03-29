<p align="center">
    <img src="https://user-images.githubusercontent.com/6702424/80216211-00ef5280-863e-11ea-81de-59f3a3d4b8e4.png">  
</p>
<p align="center">
    <i>Leverage the more advanced features of TypeScript</i>
    <br>
    <br>
    <img src="https://github.com/garronej/tsafe/workflows/ci/badge.svg?branch=main">
    <img src="https://img.shields.io/bundlephobia/minzip/tsafe">
    <img src="https://img.shields.io/npm/dw/tsafe">
    <img src="https://img.shields.io/npm/l/tsafe">
</p>
<p align="center">
  <a href="https://github.com/garronej/tsafe">Home</a>
  -
  <a href="https://github.com/garronej/tsafe">Documentation</a>
</p>

# Install / Import

```bash
$ npm install --save tsafe
```

```typescript
import { myFunction, myObject } from "tsafe";
```

Specific imports:

```typescript
import { myFunction } from "tsafe/myFunction";
import { myObject } from "tsafe/myObject";
```

## Import from HTML, with CDN

Import it via a bundle that creates a global ( wider browser support ):

```html
<script src="//unpkg.com/tsafe/bundle.min.js"></script>
<script>
    const { myFunction, myObject } = tsafe;
</script>
```

Or import it as an ES module:

```html
<script type="module">
    import { myFunction, myObject } from "//unpkg.com/tsafe/zz_esm/index.js";
</script>
```

_You can specify the version you wish to import:_ [unpkg.com](https://unpkg.com)

## Contribute

```bash
npm install
npm run build
npm test
```
