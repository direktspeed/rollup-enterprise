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


try { throw new Error() }
catch (err) {
   getScriptUrl(err.stack)
}
Take a look at https://github.com/amiller-gh/currentScript-polyfill



import fs from 'fs';
const s = fs.readFileSync(require.resolve('systemjs/dist/s'), 'utf8');

export default {
    input: 'index.js',
    output: {
        format: 'system',
        dir: 'dist',
        entryFileNames: '[name].[hash].js',
        banner: `
            (function(){
                if(!window.__system_ready__){
                    ${s}
                }
                if(window.__system_ready__){
        `,
        footer: `
                }   
                if(!window.__system_ready__){
                    window.__system_ready__ = true;
                    System.import(document.currentScript.src)
                }
            }());    
        `
    }
}



## other method using 
loader file that imports bundles

import fs from 'fs';

function system(config) {
    return {
        name: 'system',
        async generateBundle(options, bundle) {
            const entries = Object.values(bundle)
                .filter(chunk => chunk.isEntry)
                .map(chunk => `System.import('./${chunk.fileName}')`);
            const filesToInclude = await Promise.all(
                config.include.map((file) => fs.promises.readFile(file, 'utf8'))
            );
            const code = `
                (function(){
                    ${filesToInclude.join('\n')}
                    ${entries.join('\n')}
                }());
                `;
            this.emitFile({
                type: 'asset',
                fileName: config.fileName,
                source: code
            })
        }
    }
}


system({
  include: [
    require.resolve('systemjs/dist/s')
  ],
  fileName: 'loader.js'
})



## isdork

const MagicString = require('magic-string');
const fs = require('fs');

const defaults = {
    baseURL: '/',
    include: null
}

function systemJSLoader(options) {
    const config = {...defaults, ...options};

    let contentToInclude;

    function before(content) {
        return `if(!window.System){ ${content} }`;
    }

    function after(fileName) {
        return `System.import('${config.baseURL}${fileName}')`;
    }

    return {
        name: 'systemjs-loader',
        renderStart() {
            if(!config.include || !config.include.length){
                this.error('You must supply at least one file to be included');
            }
            return Promise.all(config.include.map((file) => {
                return fs.promises.readFile(file, 'utf8');
            })).then((include) => {
                contentToInclude = include.join('\n');
            });
        },
        augmentChunkHash(chunk) {
            if (chunk.isEntry) {
                return before(contentToInclude) + after(chunk.name);
            }
        },
        async renderChunk(code, chunk, options) {
            if (!chunk.isEntry) {
                return null;
            }
            const magicString = new MagicString(code, { filename: chunk.fileName });
            magicString
                .prepend(before(contentToInclude))
                .append(after(chunk.fileName));
            return {
                code: magicString.toString(),
                map: options.sourcemap ? magicString.generateMap() : null
            }
        }
    }
}

module.exports = systemJSLoader;

## usage

import systemJSLoader from 'rollup-plugin-systemjs-loader';

export default {
    input: 'index.js',
    output: {
        format: 'system',
        dir: 'dist',
        sourcemap: true
    },
    plugins: [
        systemJSLoader({
            include: [
                require.resolve('systemjs/dist/s.js')
            ]
        })
    ]
}