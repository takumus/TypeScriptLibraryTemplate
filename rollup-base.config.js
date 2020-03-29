import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import chalk from 'chalk';
import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default (options) => ({
  input: pkg.buildSettings.entry,
  plugins: [
    resolve({ extensions }),
    commonjs(),
    babel({ extensions, include: [pkg.buildSettings.include]}),
  ],
  external(id) {
    const isNodeModules = !(/\.+\//.test(id));
    const ignore = options.ignoreNodeModules ? isNodeModules : false;
    if (ignore && pkg.buildSettings.outputIgnoreLog) {
      console.log(chalk.bold(`ignored node_modules/${id}`));
    }
    return ignore;
  }
});