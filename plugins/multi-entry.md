```js
import multiEntry from './multi-entry'
export default {
  input: [],
  plugins: [multiEntry({
   include: ['any/path/befor/on/**/*.js'],
    exclude: [],
    exports: true,
    outputFile: 'multi-entry',
})]
}
```

This version does not use or rewrites the input options so you can set them to empty array if you do not want to bundle extra files all other files should be put into include and the outputFile name is the setable configuration