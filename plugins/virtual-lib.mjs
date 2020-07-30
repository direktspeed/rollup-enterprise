import virtual from '@rollup/plugin-virtual';
import { promise as matched } from 'matched';

let entry = 'filename'
let include = [];
let exclude = [];

/* You can choose if you want to import only or export  */
let prefix = 'export * from' // 'import'
let exporter = (path) => `${prefix} ${JSON.stringify(path)};`;
const patterns = include.concat(exclude.map((pattern) => `!${pattern}`));

const entrys = matched(patterns, { realpath: true }).then((paths) =>
    paths.map(exporter).join('\n')
);

export default {
  input: entry,
  // ...
  plugins: [
    virtual({ [entry]: entrys })
  ]
};
