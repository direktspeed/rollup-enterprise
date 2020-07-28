// remove d.ts and find only ts and remove ext

//find . > lib.ts
export { default as Bundle } from './Bundle';
//export * from './browser-entry'
//export * from './node-entry'
export * from './ModuleLoader';
export * from './finalisers/umd';
export * from './finalisers/index';
export * from './finalisers/system';
export * from './finalisers/cjs';
export * from './finalisers/es';
export * from './finalisers/amd';
export * from './finalisers/shared/getInteropBlock';
export * from './finalisers/shared/setupNamespace';
export * from './finalisers/shared/warnOnBuiltins';
export * from './finalisers/shared/sanitize';
export * from './finalisers/shared/esModuleExport';
export * from './finalisers/shared/trimEmptyImports';
export * from './finalisers/shared/getInteropNamespace';
export * from './finalisers/shared/getExportBlock';
export * from './finalisers/iife';
import { default as Graph } from './Graph';
export { Graph };
export { default as ExternalModule } from './ExternalModule';
export * from './utils/identifierHelpers';
export * from './utils/addons';
export * from './utils/transform';
export * from './utils/chunkAssignment';
export * from './utils/sanitizeFileName';
export * from './utils/PluginDriver';
export * from './utils/getCodeFrame';
export * from './utils/sourceMappingURL';
export * from './utils/safeName';
export * from './utils/getIndentString';
export * from './utils/renderChunk';
export * from './utils/commondir';
export * from './utils/blank';
export * from './utils/treeshakeNode';
export * from './utils/PluginCache';
export * from './utils/error';
export * from './utils/FileEmitter';
export * from './utils/pluginUtils';
export * from './utils/systemJsRendering';
export * from './utils/timers';
export * from './utils/reservedNames';
export * from './utils/buildPhase';
export * from './utils/pureComments';
export * from './utils/base64';
export * from './utils/variableNames';
export * from './utils/resolveId';
export { readFile, writeFile } from './utils/fs';
export * from './utils/getExportMode';
export * from './utils/path';
export * from './utils/getId';
export * from './utils/renderNamePattern';
import { ensureArray } from './utils/ensureArray';
export { ensureArray };
export * from './utils/exportNames';
export * from './utils/collapseSourcemaps';
export * from './utils/escapeId';
export * from './utils/executionOrder';
export * from './utils/options/mergeOptions';
export { normalizeInputOptions } from './utils/options/normalizeInputOptions';
export * from './utils/options/options';
export * from './utils/options/normalizeOutputOptions';
export * from './utils/crypto';
export * from './utils/traverseStaticDependencies';
export * from './utils/renderHelpers';
export * from './utils/getOriginalLocation';
export * from './utils/decodedSourcemap';
export * from './utils/deconflictChunk';
export * from './utils/relativeId';
export * from './utils/PluginContext';
export { default as Module } from './Module';
/*
export * from './watch/watch'
export * from './watch/fileWatcher'
export * from './watch/fsevents-importer'


export { default as watch } from './watch/watch-proxy';
*/
export * from './ast/values';
export * from './ast/DeoptimizableEntity';
export * from './ast/ExecutionContext';
export * from './ast/scopes/CatchScope';
export * from './ast/scopes/ReturnValueScope';
export * from './ast/scopes/GlobalScope';
export * from './ast/scopes/ModuleScope';
export * from './ast/scopes/Scope';
export * from './ast/scopes/ClassBodyScope';
export * from './ast/scopes/ChildScope';
export * from './ast/scopes/FunctionScope';
export * from './ast/scopes/ParameterScope';
export * from './ast/scopes/BlockScope';
export * from './ast/nodes/ImportDefaultSpecifier';
export * from './ast/nodes/CallExpression';
export * from './ast/nodes/ForStatement';
export * from './ast/nodes/ImportDeclaration';
export * from './ast/nodes/ChainExpression';
export * from './ast/nodes/TaggedTemplateExpression';
export * from './ast/nodes/BreakStatement';
export * from './ast/nodes/Super';
export * from './ast/nodes/MetaProperty';
export * from './ast/nodes/FieldDefinition';
export * from './ast/nodes/TemplateElement';
export * from './ast/nodes/UnknownNode';
export * from './ast/nodes/SwitchStatement';
export * from './ast/nodes/ArrowFunctionExpression';
export * from './ast/nodes/ImportNamespaceSpecifier';
export * from './ast/nodes/ForOfStatement';
export * from './ast/nodes/TryStatement';
export * from './ast/nodes/WhileStatement';
export * from './ast/nodes/CatchClause';
export * from './ast/nodes/SequenceExpression';
export * from './ast/nodes/ArrayExpression';
export * from './ast/nodes/AssignmentPattern';
export * from './ast/nodes/Identifier';
export * from './ast/nodes/UnaryExpression';
export * from './ast/nodes/BinaryExpression';
export * from './ast/nodes/MethodDefinition';
export * from './ast/nodes/ExportDefaultDeclaration';
export * from './ast/nodes/AwaitExpression';
export * from './ast/nodes/NewExpression';
export * from './ast/nodes/UpdateExpression';
export * from './ast/nodes/ArrayPattern';
export * from './ast/nodes/ContinueStatement';
export * from './ast/nodes/PrivateName';
export * from './ast/nodes/ObjectPattern';
export * from './ast/nodes/VariableDeclaration';
export * from './ast/nodes/DoWhileStatement';
export * from './ast/nodes/AssignmentExpression';
export * from './ast/nodes/FunctionExpression';
export * from './ast/nodes/BlockStatement';
export * from './ast/nodes/ImportExpression';
export * from './ast/nodes/ConditionalExpression';
export * from './ast/nodes/ReturnStatement';
export * from './ast/nodes/VariableDeclarator';
export * from './ast/nodes/ObjectExpression';
export * from './ast/nodes/Program';
export * from './ast/nodes/index';
export * from './ast/nodes/SwitchCase';
export * from './ast/nodes/EmptyStatement';
export * from './ast/nodes/NodeType';
export * from './ast/nodes/ClassExpression';
export * from './ast/nodes/IfStatement';
export * from './ast/nodes/ForInStatement';
export * from './ast/nodes/ImportSpecifier';
export * from './ast/nodes/ExportAllDeclaration';
export * from './ast/nodes/LabeledStatement';
export * from './ast/nodes/Literal';
export * from './ast/nodes/ClassBody';
export * from './ast/nodes/Property';
export * from './ast/nodes/ExpressionStatement';
export * from './ast/nodes/YieldExpression';
export * from './ast/nodes/MemberExpression';
export * from './ast/nodes/SpreadElement';
export * from './ast/nodes/ThrowStatement';
export * from './ast/nodes/ExportSpecifier';
export * from './ast/nodes/TemplateLiteral';
export * from './ast/nodes/ClassDeclaration';
export * from './ast/nodes/ThisExpression';
export * from './ast/nodes/ExportNamedDeclaration';
export * from './ast/nodes/shared/Expression';
export * from './ast/nodes/shared/Pattern';
export * from './ast/nodes/shared/FunctionNode';
export * from './ast/nodes/shared/ClassNode';
export * from './ast/nodes/shared/knownGlobals';
export * from './ast/nodes/shared/MultiExpression';
export * from './ast/nodes/shared/Node';
export * from './ast/nodes/LogicalExpression';
export * from './ast/nodes/FunctionDeclaration';
export * from './ast/nodes/RestElement';
export * from './ast/utils/PathTracker';
export * from './ast/CallOptions';
export * from './ast/variables/SyntheticNamedExportVariable';
export * from './ast/variables/ExportShimVariable';
export * from './ast/variables/UndefinedVariable';
export * from './ast/variables/ExternalVariable';
export * from './ast/variables/Variable';
export * from './ast/variables/ThisVariable';
export * from './ast/variables/ExportDefaultVariable';
export * from './ast/variables/LocalVariable';
export * from './ast/variables/GlobalVariable';
export * from './ast/variables/NamespaceVariable';
export * from './ast/variables/ArgumentsVariable';
export * from './ast/keys';
export * from './ast/Entity';
export { default as Chunk } from './Chunk';

//getInputOptions gets added by the rollup.config.lib.js build
/*
export * from './rollup/rollup';
import { default as rollup, getInputOptions } from './rollup/rollup';
export { rollup };
*/
import { GenericConfigObject } from './utils/options/options';
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


```js
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
```
*/
