import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs/dist/index.es';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import fs from 'fs';
import path from 'path';
import { string } from 'rollup-plugin-string';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript';
import addCliEntry from './build-plugins/add-cli-entry.js';
import conditionalFsEventsImport from './build-plugins/conditional-fsevents-import';
import emitModulePackageFile from './build-plugins/emit-module-package-file.js';
import esmDynamicImport from './build-plugins/esm-dynamic-import.js';
import getLicenseHandler from './build-plugins/generate-license-file';
import pkg from './package.json';
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
    {
        name: 'extend-rollup-exports', // this name will show up in warnings and errors
        resolveId ( source ) {
          //console.log(source)
          if (source.indexOf('/rollup/rollup') > -1) {
            console.log('Got Rollup resolve')
            //return source; // this signals that rollup should not ask other plugins or check the file system to find this id
          }
          return null; // other ids should be handled as usually
        },
        load ( id ) {
          if (id.indexOf('/rollup/rollup') > -1) {
            console.log('Got Rollup load')
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
                export { getInputOptions, applyOptionHook, normalizePlugins, handleGenerateWrite, getOutputOptionsAndPluginDriver, getOutputOptions, createOutput, getSortingFileType, writeOutputFile }
                `);
				return { code: magicString.toString(), map: magicString.generateMap({ hires: true }) };
			}

            return null; // other ids should be handled as usually
            
        }
      },
    alias(moduleAliases),
	resolve(),
	json(),
	conditionalFsEventsImport(),
	string({ include: '**/*.md' }),
	commonjs({ include: 'node_modules/**' }),
	typescript()
];

export default command => {
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
			!command.configTest && collectLicenses()
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

	if (command.configTest) {
		return commonJSBuild;
	}

	const esmBuild = {
		...commonJSBuild,
		input: { 'rollup.js': 'src/lib-entry.ts' },
		plugins: [...nodePlugins, emitModulePackageFile(), collectLicenses()],
		output: {
			banner,
			chunkFileNames: 'shared/[name].js',
			entryFileNames: '[name]',
			externalLiveBindings: false,
			freeze: false,
			interop: false,
			dir: 'dist/es',
			format: 'es',
			sourcemap: false,
			minifyInternalExports: false
		}
	};

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
	
	return [esmBuild];
};
