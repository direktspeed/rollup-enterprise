// remove d.ts and find only ts and remove ext

//find . > lib.ts
export { default as Bundle } from '../../src/Bundle';
//export * from './browser-entry'
//export * from './node-entry'
export * from '../../src/ModuleLoader';
export * from '../../src/finalisers/umd';
export * from '../../src/finalisers/index';
export * from '../../src/finalisers/system';
export * from '../../src/finalisers/cjs';
export * from '../../src/finalisers/es';
export * from '../../src/finalisers/amd';
export * from '../../src/finalisers/shared/getInteropBlock';
export * from '../../src/finalisers/shared/setupNamespace';
export * from '../../src/finalisers/shared/warnOnBuiltins';
export * from '../../src/finalisers/shared/sanitize';
export * from '../../src/finalisers/shared/esModuleExport';
export * from '../../src/finalisers/shared/trimEmptyImports';
export * from '../../src/finalisers/shared/getInteropNamespace';
export * from '../../src/finalisers/shared/getExportBlock';
export * from '../../src/finalisers/iife';
import { default as Graph } from '../../src/Graph';
export { Graph };
export { default as ExternalModule } from '../../src/ExternalModule';
export * from '../../src/utils/identifierHelpers';
export * from '../../src/utils/addons';
export * from '../../src/utils/transform';
export * from '../../src/utils/chunkAssignment';
export * from '../../src/utils/sanitizeFileName';
export * from '../../src/utils/PluginDriver';
export * from '../../src/utils/getCodeFrame';
export * from '../../src/utils/sourceMappingURL';
export * from '../../src/utils/safeName';
export * from '../../src/utils/getIndentString';
export * from '../../src/utils/renderChunk';
export * from '../../src/utils/commondir';
export * from '../../src/utils/blank';
export * from '../../src/utils/treeshakeNode';
export * from '../../src/utils/PluginCache';
export * from '../../src/utils/error';
export * from '../../src/utils/FileEmitter';
export * from '../../src/utils/pluginUtils';
export * from '../../src/utils/systemJsRendering';
export * from '../../src/utils/timers';
export * from '../../src/utils/reservedNames';
export * from '../../src/utils/buildPhase';
export * from '../../src/utils/pureComments';
export * from '../../src/utils/base64';
export * from '../../src/utils/variableNames';
export * from '../../src/utils/resolveId';
export { readFile, writeFile } from '../../src/utils/fs';
export * from '../../src/utils/getExportMode';
export * from '../../src/utils/path';
export * from '../../src/utils/getId';
export * from '../../src/utils/renderNamePattern';
import { ensureArray } from '../../src/utils/ensureArray';
export { ensureArray };
export * from '../../src/utils/exportNames';
export * from '../../src/utils/collapseSourcemaps';
export * from '../../src/utils/escapeId';
export * from '../../src/utils/executionOrder';
export * from '../../src/utils/options/mergeOptions';
export { normalizeInputOptions } from '../../src/utils/options/normalizeInputOptions';
export * from '../../src/utils/options/options';
export * from '../../src/utils/options/normalizeOutputOptions';
export * from '../../src/utils/crypto';
export * from '../../src/utils/traverseStaticDependencies';
export * from '../../src/utils/renderHelpers';
export * from '../../src/utils/getOriginalLocation';
export * from '../../src/utils/decodedSourcemap';
export * from '../../src/utils/deconflictChunk';
export * from '../../src/utils/relativeId';
export * from '../../src/utils/PluginContext';
export { default as Module } from '../../src/Module';
/*
export * from './watch/watch'
export * from './watch/fileWatcher'
export * from './watch/fsevents-importer'


export { default as watch } from './watch/watch-proxy';
*/
export * from '../../src/ast/values';
export * from '../../src/ast/DeoptimizableEntity';
export * from '../../src/ast/ExecutionContext';
export * from '../../src/ast/scopes/CatchScope';
export * from '../../src/ast/scopes/ReturnValueScope';
export * from '../../src/ast/scopes/GlobalScope';
export * from '../../src/ast/scopes/ModuleScope';
export * from '../../src/ast/scopes/Scope';
export * from '../../src/ast/scopes/ClassBodyScope';
export * from '../../src/ast/scopes/ChildScope';
export * from '../../src/ast/scopes/FunctionScope';
export * from '../../src/ast/scopes/ParameterScope';
export * from '../../src/ast/scopes/BlockScope';
export * from '../../src/ast/nodes/ImportDefaultSpecifier';
export * from '../../src/ast/nodes/CallExpression';
export * from '../../src/ast/nodes/ForStatement';
export * from '../../src/ast/nodes/ImportDeclaration';
export * from '../../src/ast/nodes/ChainExpression';
export * from '../../src/ast/nodes/TaggedTemplateExpression';
export * from '../../src/ast/nodes/BreakStatement';
export * from '../../src/ast/nodes/Super';
export * from '../../src/ast/nodes/MetaProperty';
export * from '../../src/ast/nodes/FieldDefinition';
export * from '../../src/ast/nodes/TemplateElement';
export * from '../../src/ast/nodes/UnknownNode';
export * from '../../src/ast/nodes/SwitchStatement';
export * from '../../src/ast/nodes/ArrowFunctionExpression';
export * from '../../src/ast/nodes/ImportNamespaceSpecifier';
export * from '../../src/ast/nodes/ForOfStatement';
export * from '../../src/ast/nodes/TryStatement';
export * from '../../src/ast/nodes/WhileStatement';
export * from '../../src/ast/nodes/CatchClause';
export * from '../../src/ast/nodes/SequenceExpression';
export * from '../../src/ast/nodes/ArrayExpression';
export * from '../../src/ast/nodes/AssignmentPattern';
export * from '../../src/ast/nodes/Identifier';
export * from '../../src/ast/nodes/UnaryExpression';
export * from '../../src/ast/nodes/BinaryExpression';
export * from '../../src/ast/nodes/MethodDefinition';
export * from '../../src/ast/nodes/ExportDefaultDeclaration';
export * from '../../src/ast/nodes/AwaitExpression';
export * from '../../src/ast/nodes/NewExpression';
export * from '../../src/ast/nodes/UpdateExpression';
export * from '../../src/ast/nodes/ArrayPattern';
export * from '../../src/ast/nodes/ContinueStatement';
export * from '../../src/ast/nodes/PrivateName';
export * from '../../src/ast/nodes/ObjectPattern';
export * from '../../src/ast/nodes/VariableDeclaration';
export * from '../../src/ast/nodes/DoWhileStatement';
export * from '../../src/ast/nodes/AssignmentExpression';
export * from '../../src/ast/nodes/FunctionExpression';
export * from '../../src/ast/nodes/BlockStatement';
export * from '../../src/ast/nodes/ImportExpression';
export * from '../../src/ast/nodes/ConditionalExpression';
export * from '../../src/ast/nodes/ReturnStatement';
export * from '../../src/ast/nodes/VariableDeclarator';
export * from '../../src/ast/nodes/ObjectExpression';
export * from '../../src/ast/nodes/Program';
export * from '../../src/ast/nodes/index';
export * from '../../src/ast/nodes/SwitchCase';
export * from '../../src/ast/nodes/EmptyStatement';
export * from '../../src/ast/nodes/NodeType';
export * from '../../src/ast/nodes/ClassExpression';
export * from '../../src/ast/nodes/IfStatement';
export * from '../../src/ast/nodes/ForInStatement';
export * from '../../src/ast/nodes/ImportSpecifier';
export * from '../../src/ast/nodes/ExportAllDeclaration';
export * from '../../src/ast/nodes/LabeledStatement';
export * from '../../src/ast/nodes/Literal';
export * from '../../src/ast/nodes/ClassBody';
export * from '../../src/ast/nodes/Property';
export * from '../../src/ast/nodes/ExpressionStatement';
export * from '../../src/ast/nodes/YieldExpression';
export * from '../../src/ast/nodes/MemberExpression';
export * from '../../src/ast/nodes/SpreadElement';
export * from '../../src/ast/nodes/ThrowStatement';
export * from '../../src/ast/nodes/ExportSpecifier';
export * from '../../src/ast/nodes/TemplateLiteral';
export * from '../../src/ast/nodes/ClassDeclaration';
export * from '../../src/ast/nodes/ThisExpression';
export * from '../../src/ast/nodes/ExportNamedDeclaration';
export * from '../../src/ast/nodes/shared/Expression';
export * from '../../src/ast/nodes/shared/Pattern';
export * from '../../src/ast/nodes/shared/FunctionNode';
export * from '../../src/ast/nodes/shared/ClassNode';
export * from '../../src/ast/nodes/shared/knownGlobals';
export * from '../../src/ast/nodes/shared/MultiExpression';
export * from '../../src/ast/nodes/shared/Node';
export * from '../../src/ast/nodes/LogicalExpression';
export * from '../../src/ast/nodes/FunctionDeclaration';
export * from '../../src/ast/nodes/RestElement';
export * from '../../src/ast/utils/PathTracker';
export * from '../../src/ast/CallOptions';
export * from '../../src/ast/variables/SyntheticNamedExportVariable';
export * from '../../src/ast/variables/ExportShimVariable';
export * from '../../src/ast/variables/UndefinedVariable';
export * from '../../src/ast/variables/ExternalVariable';
export * from '../../src/ast/variables/Variable';
export * from '../../src/ast/variables/ThisVariable';
export * from '../../src/ast/variables/ExportDefaultVariable';
export * from '../../src/ast/variables/LocalVariable';
export * from '../../src/ast/variables/GlobalVariable';
export * from '../../src/ast/variables/NamespaceVariable';
export * from '../../src/ast/variables/ArgumentsVariable';
export * from '../../src/ast/keys';
export * from '../../src/ast/Entity';
export { default as Chunk } from '../../src/Chunk';

//getInputOptions gets added by the rollup.config.lib.js build
/*
export * from './rollup/rollup';
import { default as rollup, getInputOptions } from './rollup/rollup';
export { rollup };
*/
import { GenericConfigObject } from '../../src/utils/options/options';
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
