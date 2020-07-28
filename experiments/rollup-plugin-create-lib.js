// Usage import lib from 'rollup-plugin-create-lib.js'
// plugins[lib()]
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default ()=>{
    return    {
        name: 'extend-rollup-exports', // this name will show up in warnings and errors
        resolveId ( source ) {
          //console.log(source)
          if (source.indexOf('/rollup/rollup') > -1) {
            //console.log('Got Rollup resolve')
            //return source; // this signals that rollup should not ask other plugins or check the file system to find this id
		  }
/*
		  if ([
'../Bundle',
'../Graph',
'../utils/ensureArray',
//'../utils/error',
'../utils/fs',
'../utils/options/normalizeInputOptions',
'../utils/options/normalizeOutputOptions',
'../utils/options/options',
'../utils/path',
'../utils/PluginDriver',
'../utils/pluginUtils',
'../utils/sourceMappingURL',
'../utils/timers',].includes(source)) {
	console.log('Got resolve:' )
	return '/home/frank/Projekte/rollup/src/lib-entry.ts'
}
*/

          return null; // other ids should be handled as usually
        },
        load ( id ) {
		  
		  if (id.indexOf('/rollup/rollup') > -1) {
            //console.log('Got Rollup load')
            //return 'export default "This is virtual!"'; // the source code for "rollup/rollup"
          }
          return null; // other ids should be handled as usually
        },
        transform(code, id) {
			
			if (id.indexOf('/rollup/rollup') > -1) {
                console.log('Got Rollup transform')
                const magicString = new MagicString(code);
				
				magicString.append(`
                
                //Add extra exports
				export { rollup, getInputOptions, applyOptionHook, normalizePlugins, handleGenerateWrite, getOutputOptionsAndPluginDriver, getOutputOptions, createOutput, getSortingFileType, writeOutputFile }
				
				// remove d.ts and find only ts and remove ext

//find . > lib.ts
export { default as Bundle } from '${__dirname}/src/Bundle';
//export * from '${__dirname}/src/browser-entry'
//export * from '${__dirname}/src/node-entry'
export * from '${__dirname}/src/ModuleLoader';
export * from '${__dirname}/src/finalisers/umd';
export * from '${__dirname}/src/finalisers/index';
export * from '${__dirname}/src/finalisers/system';
export * from '${__dirname}/src/finalisers/cjs';
export * from '${__dirname}/src/finalisers/es';
export * from '${__dirname}/src/finalisers/amd';
export * from '${__dirname}/src/finalisers/shared/getInteropBlock';
export * from '${__dirname}/src/finalisers/shared/setupNamespace';
export * from '${__dirname}/src/finalisers/shared/warnOnBuiltins';
export * from '${__dirname}/src/finalisers/shared/sanitize';
export * from '${__dirname}/src/finalisers/shared/esModuleExport';
export * from '${__dirname}/src/finalisers/shared/trimEmptyImports';
export * from '${__dirname}/src/finalisers/shared/getInteropNamespace';
export * from '${__dirname}/src/finalisers/shared/getExportBlock';
export * from '${__dirname}/src/finalisers/iife';
import { default as Graph } from '${__dirname}/src/Graph';
export { Graph };
export { default as ExternalModule } from '${__dirname}/src/ExternalModule';
export * from '${__dirname}/src/utils/identifierHelpers';
export * from '${__dirname}/src/utils/addons';
export * from '${__dirname}/src/utils/transform';
export * from '${__dirname}/src/utils/chunkAssignment';
export * from '${__dirname}/src/utils/sanitizeFileName';
export * from '${__dirname}/src/utils/PluginDriver';
export * from '${__dirname}/src/utils/getCodeFrame';
export * from '${__dirname}/src/utils/sourceMappingURL';
export * from '${__dirname}/src/utils/safeName';
export * from '${__dirname}/src/utils/getIndentString';
export * from '${__dirname}/src/utils/renderChunk';
export * from '${__dirname}/src/utils/commondir';
export * from '${__dirname}/src/utils/blank';
export * from '${__dirname}/src/utils/treeshakeNode';
export * from '${__dirname}/src/utils/PluginCache';
export * from '${__dirname}/src/utils/error';
export * from '${__dirname}/src/utils/FileEmitter';
export * from '${__dirname}/src/utils/pluginUtils';
export * from '${__dirname}/src/utils/systemJsRendering';
export * from '${__dirname}/src/utils/timers';
export * from '${__dirname}/src/utils/reservedNames';
export * from '${__dirname}/src/utils/buildPhase';
export * from '${__dirname}/src/utils/pureComments';
export * from '${__dirname}/src/utils/base64';
export * from '${__dirname}/src/utils/variableNames';
export * from '${__dirname}/src/utils/resolveId';
export { readFile, writeFile } from '${__dirname}/src/utils/fs';
export * from '${__dirname}/src/utils/getExportMode';
export * from '${__dirname}/src/utils/path';
export * from '${__dirname}/src/utils/getId';
export * from '${__dirname}/src/utils/renderNamePattern';
import { ensureArray } from '${__dirname}/src/utils/ensureArray';
export { ensureArray };
export * from '${__dirname}/src/utils/exportNames';
export * from '${__dirname}/src/utils/collapseSourcemaps';
export * from '${__dirname}/src/utils/escapeId';
export * from '${__dirname}/src/utils/executionOrder';
export * from '${__dirname}/src/utils/options/mergeOptions';
export { normalizeInputOptions } from '${__dirname}/src/utils/options/normalizeInputOptions';
export * from '${__dirname}/src/utils/options/options';
export * from '${__dirname}/src/utils/options/normalizeOutputOptions';
export * from '${__dirname}/src/utils/crypto';
export * from '${__dirname}/src/utils/traverseStaticDependencies';
export * from '${__dirname}/src/utils/renderHelpers';
export * from '${__dirname}/src/utils/getOriginalLocation';
export * from '${__dirname}/src/utils/decodedSourcemap';
export * from '${__dirname}/src/utils/deconflictChunk';
export * from '${__dirname}/src/utils/relativeId';
export * from '${__dirname}/src/utils/PluginContext';
export { default as Module } from '${__dirname}/src/Module';
/*
export * from '${__dirname}/src/watch/watch'
export * from '${__dirname}/src/watch/fileWatcher'
export * from '${__dirname}/src/watch/fsevents-importer'
*/

export { default as watch } from '${__dirname}/src/watch/watch-proxy';

export * from '${__dirname}/src/ast/values';
export * from '${__dirname}/src/ast/DeoptimizableEntity';
export * from '${__dirname}/src/ast/ExecutionContext';
export * from '${__dirname}/src/ast/scopes/CatchScope';
export * from '${__dirname}/src/ast/scopes/ReturnValueScope';
export * from '${__dirname}/src/ast/scopes/GlobalScope';
export * from '${__dirname}/src/ast/scopes/ModuleScope';
export * from '${__dirname}/src/ast/scopes/Scope';
export * from '${__dirname}/src/ast/scopes/ClassBodyScope';
export * from '${__dirname}/src/ast/scopes/ChildScope';
export * from '${__dirname}/src/ast/scopes/FunctionScope';
export * from '${__dirname}/src/ast/scopes/ParameterScope';
export * from '${__dirname}/src/ast/scopes/BlockScope';
export * from '${__dirname}/src/ast/nodes/ImportDefaultSpecifier';
export * from '${__dirname}/src/ast/nodes/CallExpression';
export * from '${__dirname}/src/ast/nodes/ForStatement';
export * from '${__dirname}/src/ast/nodes/ImportDeclaration';
export * from '${__dirname}/src/ast/nodes/ChainExpression';
export * from '${__dirname}/src/ast/nodes/TaggedTemplateExpression';
export * from '${__dirname}/src/ast/nodes/BreakStatement';
export * from '${__dirname}/src/ast/nodes/Super';
export * from '${__dirname}/src/ast/nodes/MetaProperty';
export * from '${__dirname}/src/ast/nodes/FieldDefinition';
export * from '${__dirname}/src/ast/nodes/TemplateElement';
export * from '${__dirname}/src/ast/nodes/UnknownNode';
export * from '${__dirname}/src/ast/nodes/SwitchStatement';
export * from '${__dirname}/src/ast/nodes/ArrowFunctionExpression';
export * from '${__dirname}/src/ast/nodes/ImportNamespaceSpecifier';
export * from '${__dirname}/src/ast/nodes/ForOfStatement';
export * from '${__dirname}/src/ast/nodes/TryStatement';
export * from '${__dirname}/src/ast/nodes/WhileStatement';
export * from '${__dirname}/src/ast/nodes/CatchClause';
export * from '${__dirname}/src/ast/nodes/SequenceExpression';
export * from '${__dirname}/src/ast/nodes/ArrayExpression';
export * from '${__dirname}/src/ast/nodes/AssignmentPattern';
export * from '${__dirname}/src/ast/nodes/Identifier';
export * from '${__dirname}/src/ast/nodes/UnaryExpression';
export * from '${__dirname}/src/ast/nodes/BinaryExpression';
export * from '${__dirname}/src/ast/nodes/MethodDefinition';
export * from '${__dirname}/src/ast/nodes/ExportDefaultDeclaration';
export * from '${__dirname}/src/ast/nodes/AwaitExpression';
export * from '${__dirname}/src/ast/nodes/NewExpression';
export * from '${__dirname}/src/ast/nodes/UpdateExpression';
export * from '${__dirname}/src/ast/nodes/ArrayPattern';
export * from '${__dirname}/src/ast/nodes/ContinueStatement';
export * from '${__dirname}/src/ast/nodes/PrivateName';
export * from '${__dirname}/src/ast/nodes/ObjectPattern';
export * from '${__dirname}/src/ast/nodes/VariableDeclaration';
export * from '${__dirname}/src/ast/nodes/DoWhileStatement';
export * from '${__dirname}/src/ast/nodes/AssignmentExpression';
export * from '${__dirname}/src/ast/nodes/FunctionExpression';
export * from '${__dirname}/src/ast/nodes/BlockStatement';
export * from '${__dirname}/src/ast/nodes/ImportExpression';
export * from '${__dirname}/src/ast/nodes/ConditionalExpression';
export * from '${__dirname}/src/ast/nodes/ReturnStatement';
export * from '${__dirname}/src/ast/nodes/VariableDeclarator';
export * from '${__dirname}/src/ast/nodes/ObjectExpression';
export * from '${__dirname}/src/ast/nodes/Program';
export * from '${__dirname}/src/ast/nodes/index';
export * from '${__dirname}/src/ast/nodes/SwitchCase';
export * from '${__dirname}/src/ast/nodes/EmptyStatement';
export * from '${__dirname}/src/ast/nodes/NodeType';
export * from '${__dirname}/src/ast/nodes/ClassExpression';
export * from '${__dirname}/src/ast/nodes/IfStatement';
export * from '${__dirname}/src/ast/nodes/ForInStatement';
export * from '${__dirname}/src/ast/nodes/ImportSpecifier';
export * from '${__dirname}/src/ast/nodes/ExportAllDeclaration';
export * from '${__dirname}/src/ast/nodes/LabeledStatement';
export * from '${__dirname}/src/ast/nodes/Literal';
export * from '${__dirname}/src/ast/nodes/ClassBody';
export * from '${__dirname}/src/ast/nodes/Property';
export * from '${__dirname}/src/ast/nodes/ExpressionStatement';
export * from '${__dirname}/src/ast/nodes/YieldExpression';
export * from '${__dirname}/src/ast/nodes/MemberExpression';
export * from '${__dirname}/src/ast/nodes/SpreadElement';
export * from '${__dirname}/src/ast/nodes/ThrowStatement';
export * from '${__dirname}/src/ast/nodes/ExportSpecifier';
export * from '${__dirname}/src/ast/nodes/TemplateLiteral';
export * from '${__dirname}/src/ast/nodes/ClassDeclaration';
export * from '${__dirname}/src/ast/nodes/ThisExpression';
export * from '${__dirname}/src/ast/nodes/ExportNamedDeclaration';
export * from '${__dirname}/src/ast/nodes/shared/Expression';
export * from '${__dirname}/src/ast/nodes/shared/Pattern';
export * from '${__dirname}/src/ast/nodes/shared/FunctionNode';
export * from '${__dirname}/src/ast/nodes/shared/ClassNode';
export * from '${__dirname}/src/ast/nodes/shared/knownGlobals';
export * from '${__dirname}/src/ast/nodes/shared/MultiExpression';
export * from '${__dirname}/src/ast/nodes/shared/Node';
export * from '${__dirname}/src/ast/nodes/LogicalExpression';
export * from '${__dirname}/src/ast/nodes/FunctionDeclaration';
export * from '${__dirname}/src/ast/nodes/RestElement';
export * from '${__dirname}/src/ast/utils/PathTracker';
export * from '${__dirname}/src/ast/CallOptions';
export * from '${__dirname}/src/ast/variables/SyntheticNamedExportVariable';
export * from '${__dirname}/src/ast/variables/ExportShimVariable';
export * from '${__dirname}/src/ast/variables/UndefinedVariable';
export * from '${__dirname}/src/ast/variables/ExternalVariable';
export * from '${__dirname}/src/ast/variables/Variable';
export * from '${__dirname}/src/ast/variables/ThisVariable';
export * from '${__dirname}/src/ast/variables/ExportDefaultVariable';
export * from '${__dirname}/src/ast/variables/LocalVariable';
export * from '${__dirname}/src/ast/variables/GlobalVariable';
export * from '${__dirname}/src/ast/variables/NamespaceVariable';
export * from '${__dirname}/src/ast/variables/ArgumentsVariable';
export * from '${__dirname}/src/ast/keys';
export * from '${__dirname}/src/ast/Entity';
export { default as Chunk } from '${__dirname}/src/Chunk';

// array of configs that are not false

export async function newGraph(rawInputOptions: GenericConfigObject, watcher = null) {
	const { options: inputOptions, unsetOptions: unsetInputOptions } = await getInputOptions(
		rawInputOptions,
		watcher !== null
	);
    const graph = new Graph(inputOptions, watcher);
    graph.inputOptions = inputOptions
    graph.unsetInputOptions = unsetInputOptions
    return graph
    //{ graph, inputOptions, unsetInputOptions}
}
/*
export async function 
handleGenerateWrite(
	isWrite: boolean,
	inputOptions: NormalizedInputOptions,
	unsetInputOptions: Set<string>,
	rawOutputOptions: GenericConfigObject,
	graph: Graph
):
*/
//new Watcher([{ watch: !false }], new WatchEmitter()) expects configs to be array of configs.filter(x=>x.watch !== false)
// newGraph(rollupConfig,watch(rollupConfig)).then(graph=>)
// newGraph(rollupConfig,null).then(graph=>)

/*
## Show Emitting a chunk

graph.PluginDriver.emitFile()


\`\`\`js
const consumedChunk: ConsumedChunk = {
    fileName: emittedChunk.fileName,
    module: null,
    name: emittedChunk.name || emittedChunk.id,
    type: 'chunk'
};
this.graph.moduleLoader
    .emitChunk((emittedChunk as unknown) as EmittedChunk)
    .then(module => (consumedChunk.module = module))
    .catch(() => {
        // Avoid unhandled Promise rejection as the error will be thrown later
        // once module loading has finished
    });

return graph.PluginDriver.assignReferenceId(consumedChunk, emittedChunk.id);
\`\`\`
*/

            `);
            return { code: magicString.toString(), map: magicString.generateMap({ hires: true }) };
        }

        return null; // other ids should be handled as usually
        
    }
}
}