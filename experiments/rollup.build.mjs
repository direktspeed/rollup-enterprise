import rollupLib from 'rollup-plugin-create-lib.js'
import { rollup, newGraph, getOutputOptionsAndPluginDriver } from '../dist/es/rollup.js'
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
// npm i @rollup/plugin-node-resolve@>8.4.0
import resolve from '@rollup/plugin-node-resolve';
import fs from 'fs';
import path from 'path';
import stringExports from 'rollup-plugin-string';
const { string } = stringExports
console.log(string)
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript';
import addCliEntry from '../build-plugins/add-cli-entry.js';
import conditionalFsEventsImport from '../build-plugins/conditional-fsevents-import.js';
import emitModulePackageFile from '../build-plugins/emit-module-package-file.js';
import esmDynamicImport from '../build-plugins/esm-dynamic-import.js';
import getLicenseHandler from '../build-plugins/generate-license-file.js';
//import pkg from './package.json';
const pkg = { version:  "2.21.0" }
import MagicString from 'magic-string';



const commitHash = (function () {
	try {
		return fs.readFileSync('.commithash', 'utf-8');
	} catch (err) {
		return 'unknown';
	}
})();

const now = new Date(
	process.env.SOURCE_DATE_EPOCH ? process.env.SOURCE_DATE_EPOCH * 1000 : new Date().getTime()
).toUTCString();

const banner = `/*
  @license
	Rollup.js v${pkg.version}
	${now} - commit ${commitHash}

	https://github.com/rollup/rollup

	Released under the MIT License.
*/`;

const onwarn = warning => {
	// eslint-disable-next-line no-console
	console.error(
		'Building Rollup produced warnings that need to be resolved. ' +
			'Please keep in mind that the browser build may never have external dependencies!'
	);
	throw new Error(warning.message);
};

const moduleAliases = {
	resolve: ['.js', '.json', '.md'],
	entries: [
		{ find: 'help.md', replacement: path.resolve('cli/help.md') },
		{ find: 'package.json', replacement: path.resolve('package.json') }
	]
};

const treeshake = {
	moduleSideEffects: false,
	propertyReadSideEffects: false,
	tryCatchDeoptimization: false
};

const nodePlugins = [
    rollupLib(),
    alias(moduleAliases),
	resolve(),
	json(),
	conditionalFsEventsImport(),
	string({ include: '**/*.md' }),
	commonjs({ include: 'node_modules/**' }),
	typescript()
];


	const { collectLicenses, writeLicense } = getLicenseHandler();
	const commonJSBuild = {
		input: {
            'rollup.js': 'src/node-entry.ts',
            'lib-rollup.js': 'src/lib.ts',
			'loadConfigFile.js': 'cli/run/loadConfigFile.ts'
		},
		onwarn,
		plugins: [
			...nodePlugins,
			addCliEntry(),
			esmDynamicImport(),
			collectLicenses()
		],
		// fsevents is a dependency of chokidar that cannot be bundled as it contains binary code
		external: [
			'assert',
			'crypto',
			'events',
			'fs',
			'fsevents',
			'module',
			'path',
			'os',
			'stream',
			'url',
			'util'
		],
		treeshake,
		strictDeprecations: true,
		output: {
			banner,
			chunkFileNames: 'shared/[name].js',
			dir: 'dist',
			entryFileNames: '[name]',
			externalLiveBindings: false,
			format: 'cjs',
			freeze: false,
			interop: false,
			manualChunks: { rollup: ['src/node-entry.ts'] },
			sourcemap: true
		}
	};

	const esmBuild = {
		...commonJSBuild,
		input: { 'rollup.js': '/home/frank/Projekte/rollup/src/rollup/rollup.ts' },
		plugins: [...nodePlugins, ,emitModulePackageFile(), collectLicenses()],
		output: {
			...commonJSBuild.output,
			dir: 'dist/es',
			format: 'es',
			sourcemap: false,
			minifyInternalExports: false
		}
	};
	delete esmBuild.output
	const esmBuildOutput = 		{ output: {
		banner,
		chunkFileNames: 'shared/[name].js',
		entryFileNames: '[name]',
		externalLiveBindings: false,
		freeze: false,
		interop: false,
		dir: 'dist-lib',
		format: 'es',
		sourcemap: false,
		minifyInternalExports: false
	}}

	const browserBuilds = {
		input: { 'rollup.browser': 'src/lib-entry.ts', },
		onwarn,
		plugins: [
			alias(moduleAliases),
			resolve({ browser: true }),
			json(),
			{
				load: id => {
					if (~id.indexOf('crypto.ts')) return fs.readFileSync('browser/crypto.ts', 'utf-8');
					if (~id.indexOf('fs.ts')) return fs.readFileSync('browser/fs.ts', 'utf-8');
					if (~id.indexOf('path.ts')) return fs.readFileSync('browser/path.ts', 'utf-8');
				}
			},
			commonjs(),
			typescript(),
			terser({ module: true, output: { comments: 'some' } }),
			collectLicenses(),
			writeLicense()
		],
		treeshake,
		strictDeprecations: true,
		output: [
			{ dir: 'dist', format: 'umd', name: 'rollup', banner },
			{ dir: 'dist/es', format: 'es', banner }
		]
	};
    //console.log(esmBuild)
	rollup(esmBuild).then(bundle=>{	
		console.log(bundle)	
		bundle.write(esmBuildOutput)
	});
	/*
	newGraph(esmBuild).then(async graph=>{
		const { inputOptions, unsetInputOptions} = graph;
		//graph.build().then(x=>console.log(x)).then(()=>console.log(graph.entryModules.length))
		const { options: outputOptions, outputPluginDriver, unsetOptions } = getOutputOptionsAndPluginDriver(esmBuildOutput, graph.pluginDriver, inputOptions, unsetInputOptions);
		const bundle = new Bundle(outputOptions, unsetOptions, inputOptions, outputPluginDriver, graph);
		//const generated = await bundle.generate(isWrite);
	})
	*/

