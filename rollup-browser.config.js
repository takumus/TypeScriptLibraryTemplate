import BaseConfig from './rollup-base.config';
import pkg from './package.json';

export default {
  ...BaseConfig({
    ignoreNodeModules: !pkg.buildSettings.iife.includesNodeModules
  }),
  output: [{
    file: pkg.buildSettings.iife.file,
    name: pkg.buildSettings.iife.name,
    format: 'iife',
    globals: {}
  }]
};
