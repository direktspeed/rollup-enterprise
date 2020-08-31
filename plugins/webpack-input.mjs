## rollup-plugin-webpack-input
As Webpack now added Supirior Treeshaking for CJS it is reason able that you could use webpack as replacement for plugin-commonjs

So Webpack 5 bundles should be produce and useable via rollup
Verify that webpack library bundles work with rollup. the webpack esm-export plugin could be a bridge.

```js
plugins: [webpackInput(bundleConfig)]
```
