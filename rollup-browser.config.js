import BaseConfig from './rollup-base.config';
import pkg from './package.json';

export default {
  ...BaseConfig({
    ignoreNodeModules: false
  }),
  output: [{
    file: pkg.buildSettings.iife.file,
    name: pkg.buildSettings.iife.name,
    format: 'iife',
    globals: {}
  }]
};
