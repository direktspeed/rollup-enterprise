/* NodeJS */
import * as fs from 'fs';
import { dirname } from './path';

export * from 'fs';

export const readFile = (file: string) =>
	new Promise<string>((fulfil, reject) =>
		fs.readFile(file, 'utf-8', (err, contents) => (err ? reject(err) : fulfil(contents)))
	);

function mkdirpath(path: string) {
	const dir = dirname(path);
	try {
		fs.readdirSync(dir);
	} catch (err) {
		mkdirpath(dir);
		try {
			fs.mkdirSync(dir);
		} catch (err2) {
			if (err2.code !== 'EEXIST') {
				throw err2;
			}
		}
	}
}

export function writeFile(dest: string, data: string | Uint8Array) {
	return new Promise<void>((fulfil, reject) => {
		mkdirpath(dest);

		fs.writeFile(dest, data, err => {
			if (err) {
				reject(err);
			} else {
				fulfil();
			}
		});
	});
}

const absolutePath = /^(?:\/|(?:[A-Za-z]:)?[\\|/])/;
const relativePath = /^\.?\.\//;

export function isAbsolute(path: string) {
	return absolutePath.test(path);
}

export function isRelative(path: string) {
	return relativePath.test(path);
}

export function normalize(path: string) {
	if (path.indexOf('\\') == -1) return path;
	return path.replace(/\\/g, '/');
}

export { basename, dirname, extname, relative, resolve } from 'path';

import { createHash as cryptoCreateHash } from 'crypto';

export const createHash = () => cryptoCreateHash('sha256');
