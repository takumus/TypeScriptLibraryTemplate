import BaseConfig from './rollup-base.config';
import pkg from './package.json';

export default {
  ...BaseConfig({
    ignoreNodeModules: !pkg.buildSettings.esm.exportWithNodeModules
  }),
  output: [{
    file: pkg.module,
    format: 'es',
  }],
};
