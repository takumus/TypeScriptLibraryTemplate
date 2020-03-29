import BaseConfig from './rollup-base.config';
import pkg from './package.json';

export default {
  ...BaseConfig({
    ignoreNodeModules: !pkg.buildSettings.browser.includesNodeModules
  }),
  output: [{
    file: pkg.buildSettings.browser.file,
    name: pkg.buildSettings.browser.name,
    format: 'iife',
    globals: {}
  }]
};
