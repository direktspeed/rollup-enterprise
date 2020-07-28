//Transform SystemJS.min file to assign SystemJS only if it is not already loaded needed to be loaded more then once in multiple entrypoints
const transformMinifiedSystemJSVersion = (minSystemJS)=>{
    let [start,end] = minSystemJS.toString('utf8').split('.System=new ');
    const globalVarName = start.charAt(start.length - 1); // 'm'
    return `${start}.System=${globalVarName}.System || new ${end}`
}


//if you use output name you need to include the systemjs loader with extra register named module
import fs from 'fs'
export default {
    input: './src/main.js',
    output: {
        dir: 'dist',
        banner: transformMinifiedSystemJSVersion(fs.readFileSync('./node_modules/systemjs/dist/s.min.js')),
        footer: (...args)=>{
            console.log(args)
            return `System.getRegister()[1]({},System).execute()`
        },
        format: 'systemjs',
    }
}



//Inline into something later.
//if you use output name you need to include the systemjs loader with extra register named module
import fs from 'fs'
export default {
    input: './src/main.js',
    output: {
        dir: 'dist',
        banner: fs.readFileSync('../node_modules/systemjs/dist/s.min.js'),
        footer: `System.getRegister()[1]({},System).execute()`,
        format: 'systemjs',
    }
}
