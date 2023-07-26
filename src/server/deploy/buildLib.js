const { exec } = require('child_process');

function runViteBuild() {
    const buildCommand = 'vite build';

    exec(buildCommand, (error, stdout, stderr) => {
        if (error) {
            console.error(`执行构建命令时发生错误：${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`构建命令输出错误：${stderr}`);
            return;
        }

        console.log(`构建输出：${stdout}`);
        console.log('构建完成！');
    });
}
module.exports = runViteBuild