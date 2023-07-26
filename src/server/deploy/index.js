const runViteBuild = require('./buildLib');
const docker = require('./docker');

Promise.all([
    runViteBuild(), // 生成lib
    docker(), // 生成dockerfile文件
]).then(()=>{
    console.log('browserCompiler-done!')
}).catch((error)=>{
    console.error(error);
}).finally(() => {
    console.log('deploy-done!')
});



