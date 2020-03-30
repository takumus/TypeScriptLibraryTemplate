# What is this?
I recommend you to use `tslib-cli` because this is a template for tslib-cli.
# Usage
## Build
```
npm run build
```
## buildSettings.buildMode
### paralell
You can run a build fast because it is going to build cjs/esm/browser/d.ts at the same time.  
If you have any troubles with paralell build mode, it might be better to try serial build mode.  
*Paralell build mode is a default setting.*
### serial
It runs a build in serial. When you use serial build mode, it slows down, but it might be more stable than using paralell build mode.
# I forked the pretty damn cool repository.
<https://github.com/a-tarasyuk/rollup-typescript-babel>
