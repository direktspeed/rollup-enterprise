# Working example when bundle gets not reused else where

Is based on a single input file. Can be Imported by SystemJS Packages ideal for a lib.
To Support Multiple files needs much more code but there is some like referencing the files so we can later get the name for the footer or coding own plugins but the following example works for a single file entrypoint that uses exports


```js
// In this example it would be
const fullUrlWhereTheFileGetsServed = 'https://localhost:8080/single-file-bundle/dist/main.js'

/** 
 * if you use output name you need to include the systemjs loader with extra register named module
 */
import fs from 'fs'
export default {
    input: './src/main.js',
    output: {
        file: 'dist/main.js',
        banner: fs.readFileSync('../node_modules/systemjs/dist/s.min.js').,
        footer: `System.import(${fullUrlWhereTheFileGetsServed})`, 
        format: 'systemjs',
    }
}
//Usage
//<script src="https://localhost:8080/single-file-bundle/dist/main.js"></script>
```


## Inlined Single File Bundle

That means: Your Entrypoint does not export anything is only sideEffect based. Then this footer also works with the dir code-splitting-bundle but then it is not allowed that a entrypoint imports a entrypoint or at last that needs exploration.

```js
{ 
    output: { 
        footer: `System.getRegister()[1]({},System).execute()`,   
    } 
}
//Usage:
//<script>${code}</script>
//<script src="https://localhost:8080/single-file-bundle/dist/main.js"></script>

// code-splitting only sideEffects no use of exports
//<script src="https://localhost:8080/single-file-bundle/dist/main.js">System.import('otherEntrypoint')</script>
//NOT WORKING <script src="https://localhost:8080/single-file-bundle/dist/main.js">/*use of any code exported by app */app()</script>
/*
NOT WORKING Circular dependency on entrypoint
<script src="https://localhost:8080/single-file-bundle/dist/main.js">
    SystemJS.import('otherEntrypoint').then(exports=>)
</script>
*/
```