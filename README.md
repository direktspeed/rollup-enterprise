# rollup-enterprise
A Rollup Bundler Distribution for Enterprise Needs

Rollup Enterprise is a Modified rollup distribution with own opinions about interop and handling of Project details
Your Allowed to Contribute to it we are based on the original rollup source where possible and try to backport
our futures but the rollup project it self has it's own moving speed and processes in line so it will take years

It ships with a lot of plugins it directly useable See The Plugin Section

It has the main diffrence that it offers tooling for complex builds it gets used as a toolkit to fork bad none valid code

It is to be used in other Libs or Directly via some one who needs full controll over the build process. This is the right Choice for the coder who has already done everything.

It is based always on the latest rollup you can use it as drop in replacement for using rollup programatical. Simply import { rollup } from @direktspeed/rollup-enterprise

This Exports everything that rollup uses internal and public


## Importent for package authors
Please do not relay on package.json always use your-package.js (in case of SystemJS) and your-package.mjs as output. It is the only solution that works in all environments. Most best is to even avoid a .cjs version as ESM can always get imported even via CJS via import().

The need for a CJS or UMD version is not there anymore. You can use SystemJS loader and builds in older environemnts. iife builds are also not needed anymore. So rollup-enterprise drops CJS, UMD, iife. as we target only Current Platforms and for legacy support we offer SystemJS.





## Examples

Basics
```js
import { rollup, watch } from 'rollup-enterprise/rollup.mjs' // 'rollup-enterprise', 'rollup-enterprise/rollup'
``` 


Create Graph
```js
const { options: inputOptions, unsetOptions: unsetInputOptions } = await getInputOptions(
    rawInputOptions,
    watcher !== null
);
const graph = new Graph(inputOptions, watcher);


graph.moduleLoader.fetchModule()//Add Module
graph.moduleLoader.emitFile() //Add Chunk
// Turn Module Into Chunk 
// Remove Chunk (keeps Modules!)
graph.getCache() // returns current cache

``` 

Create Bundle
```js
    const rawOutputOptions = {} // equal to general rollup output config
	const {
		options: outputOptions,
		outputPluginDriver,
		unsetOptions
	} = getOutputOptionsAndPluginDriver(
		rawOutputOptions,
		graph.pluginDriver,
		inputOptions,
		unsetInputOptions
	);
    const bundle = new Bundle(outputOptions, unsetOptions, inputOptions, outputPluginDriver, graph);

    // Use bundle generate to use the rollup flow
    const isWrite = true
    await Promise.all(Object.keys(await bundle.generate(isWrite)).map(chunkId => writeOutputFile(generated[chunkId], outputOptions)))

    // Custom Chunks and chunking before write
    const chunks = await bundle.generateChunks();
```


## Plugins

### url-resolve

### node-reslove (Optimized version)
This works also in browsers

### interop-inspector + lebab
Trys to correct problems when CJS gets imported 

## Resources
- https://gist.github.com/frank-dspeed/a5aa14c42465b6226205fc373fe3ae8e


### Coperation with 
https://github.com/assetgraph/assetgraph possible?!
