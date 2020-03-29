const cp = require('child_process');
console.log('build started!');
const tasks = [
    { name: 'd.ts', args: ['tsc', '--emitDeclarationOnly'] },
    { name: 'cjs', args: ['rollup',  '-c', 'rollup-cjs.config.js'] },
    { name: 'esm', args: ['rollup',  '-c', 'rollup-esm.config.js'] },
    { name: 'browser', args: ['rollup',  '-c', 'rollup-browser.config.js']}
];
let taskCount = 0;
tasks.forEach((task) => {
    cp.exec([/^win/.test(process.platform) ? 'npx.cmd' : 'npx', ...task.args].join(' '), (error, stdout, stderr) => {
        taskCount++;
        console.log(`\n(${taskCount}/${tasks.length})[${task.name}]`);
        process.stdout.write(stdout || stderr);
        if (taskCount == tasks.length) console.log('build complete!');
    });
});