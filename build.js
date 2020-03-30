const cp = require('child_process');
const buildMode = require('./package.json').buildSettings.buildMode;
const npx = [/^win/.test(process.platform) ? 'npx.cmd' : 'npx'];
const tasks = [
  { name: 'rimraf', args: ['rimraf', './dist'] },
  { name: 'cjs', args: ['rollup', '-c', 'rollup-cjs.config.js'] },
  { name: 'esm', args: ['rollup', '-c', 'rollup-esm.config.js'] },
  { name: 'browser', args: ['rollup', '-c', 'rollup-browser.config.js'] },
  { name: 'd.ts', args: ['tsc', '--emitDeclarationOnly'] }
];
const taskLength = tasks.length;
let taskCount = 0;
function buildParallel() { tasks.forEach((task) => build(task)); };
function buildSerial(task) { if (task) build(task, () => buildSerial(tasks.shift())); };
function build(task, callback) {
  cp.exec([...npx, ...task.args].join(' '), (error, stdout, stderr) => {
    process.stdout.write(`\n(${++taskCount}/${taskLength})[${task.name}]\n` + (error || stdout || stderr));
    if(callback) callback();
  });
}
if (buildMode == 'serial') {
  console.log('begin serial build');
  buildSerial(tasks.shift());
}else {
  console.log('begin paralell build');
  buildParallel();
}