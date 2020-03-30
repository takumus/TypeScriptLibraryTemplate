import BaseConfig from './rollup-base.config';
import pkg from './package.json';

export default {
  ...BaseConfig({
    ignoreNodeModules: !pkg.buildSettings.cjs.exportWithNodeModules
  }),
  output: [{
    file: pkg.main,
    format: 'cjs'
  }],
};
