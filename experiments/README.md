```js
import { newGraph. rollup, watch } from '@direktspeed/rollup/rollup.js'

const rollupConfig = { 
  input, 
  options: { 
    cache: { 
        //modules are instances of Module
        modules: [],
        plugins: {}
    }
  }
}
const graph = new Graph(rollupConfig, watch(rollupConfig))
graph.build()

//Advanced
//Emit some extra Chunks to analyze
graph.moduleLoader.addEntryModules([chunk('one')])


// The name property sets the later name while the id is a identifier
// path/to/file.js is a good id and name can match the final output name path/to/dist/file.mjs
// fileName at the end will be the final name to write this file 
const chunk = id => {
    return {
        fileName: null,
        id,
        implicitlyLoadedAfter: [],
        importer: undefined,
        name: null
    }
}

//is a shortcut for resolveId && fetchModule
graph.moduleLoader.loadEntryModule('one', true, importer, null)


//addChunkNamesToModule(entryModule, unresolvedEntryModules[index], isUserDefined);


``` 


//graph.moduleLoader.resolveId()
/*
normalizeResolveIdResult('src/myfile.js',null,'src/myfile')
created by normalizeResolveIdResult(
		resolveIdResult: ResolveIdResult,
		importer: string | undefined,
		source: string
	)
{
			external,
			id,
			moduleSideEffects: moduleSideEffects ?? this.hasModuleSideEffects(id, external),
			syntheticNamedExports
		};
*/
//Returns new Module instance and calls addModuleSource
const MyModule = graph.moduleLoader.fetchModule(
    id: string,
    importer: string | undefined,
    moduleSideEffects: boolean | 'no-treeshake',
    syntheticNamedExports: boolean,
    isEntry: boolean
)

//graph.moduleLoader.addModuleSource(id: string, importer: string | undefined, module: Module)
//looks in this.graph.cachedModules.get(id); else executes load 


graph.build().then(()=>console.log('done'))

/*
timeStart('generate module graph', 2);
    //done when not used input options with addEntryModules
    await this.generateModuleGraph();
    timeEnd('generate module graph', 2);

    timeStart('sort modules', 2);
    this.phase = BuildPhase.ANALYSE;
    graph.sortModules();
    timeEnd('sort modules', 2);

    timeStart('mark included statements', 2);
    graph.includeStatements();
    timeEnd('mark included statements', 2);

    this.phase = BuildPhase.GENERATE;
*/


