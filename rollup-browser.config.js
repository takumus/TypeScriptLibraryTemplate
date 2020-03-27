import BaseConfig from './rollup-base.config';
import pkg from './package.json';

export default {
  ...BaseConfig({
    igNodeNodeModules: false
  }),
  output: [{
    file: pkg.iife.file,
    name: pkg.iife.name,
    format: 'iife',
    globals: {}
  }]
};
