const cp = require('child_process');
const buildMode = require('./package.json').buildSettings.buildMode;
const npx = [/^win/.test(process.platform) ? 'npx.cmd' : 'npx'];
const tasks = [
  ['rimraf', './dist'],
  ['rollup', '-c', 'rollup-cjs.config.js'],
  ['rollup', '-c', 'rollup-esm.config.js'],
  ['rollup', '-c', 'rollup-browser.config.js'],
  ['tsc', '--emitDeclarationOnly']
];
function buildParallel(tasks) { tasks.forEach((task) => build(task)); };
function buildSerial(tasks, i) { if (tasks[i]) build(tasks[i], () => buildSerial(tasks, i + 1)); };
function build(task, callback) {
  cp.exec([...npx, ...task].join(' '), (error, stdout, stderr) => {
    process.stdout.write(`\n> ${task.join(' ')}\n` + (error || stdout || stderr));
    if (callback) callback();
  });
}
if (buildMode == 'serial') {
  console.log('begin serial build');
  buildSerial(tasks, 0);
} else {
  console.log('begin paralell build');
  buildParallel(tasks);
}