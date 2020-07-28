import { promise as matched } from 'matched';

export default function multiEntry(conf={}) {
   const config = { 
    include: [],
    exclude: [],
    exports: true,
    outputFile: 'multi-entry',
    ...conf
  }
  let { outputFile, include, exclude, exports } = config;
  if (include.length === 0) {
      // We need any includes
      throw new Error('We need Include and a outputFile')
  }
  if (typeof include === 'string' || typeof include === 'array'){
      new Error('type of include needs to be string or array of strins')
  }
  
  if (typeof exclude === 'string' || typeof exclude === 'array'){
    new Error('type of exclude needs to be string or array of strins')
  }

  //String option to array
  if (typeof exclude === 'string') {
    exclude = [exclude]
  }   
  if (typeof include === 'string') {
    include = [exclude]
  }   

  let prefix = exports ? 'export * from' : 'import'
  let exporter = (path) => `${prefix} ${JSON.stringify(path)};`;

  return {
    buildStart() {
        this.emitFile('chunk',outputFile)
    },
    resolveId(id) {
      if (id === outputFile) {
        return outputFile;
      }
      return null
    },
    load(id) {
      if (id === outputFile) {
        const patterns = include.concat(exclude.map((pattern) => `!${pattern}`));
        return matched(patterns, { realpath: true })
            .then(paths => paths.map(exporter).join('\n'));
      }
      return null
    }
  };
}