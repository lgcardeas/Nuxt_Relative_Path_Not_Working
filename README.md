# POC Path relative in `nuxt` is not supported with ignore@^5.0.0
- some of us have a monolithic app and with ignore@^4.0.0 we were able to use a path relative to reuse some of the code in other "apps",
In this example, a common project was created, which only has the middleware, a base app with the layouts, an app, and an admin app.

## how to use it
### Display the current issue
```bash
make app_not_working
```
- it will display the following error:
```bash
ERROR  path should be a path.relative()d string, but got "/usr/src/app/middleware/auth.js"

    at throwError (node_modules/ignore/index.js:397:9)
    at checkPath (node_modules/ignore/index.js:416:12)
    at Ignore._test (node_modules/ignore/index.js:537:5)
    at Ignore.ignores (node_modules/ignore/index.js:582:17)
    at node_modules/ignore/index.js:586:26
    at Array.filter (<anonymous>)
    at Ignore.filter (node_modules/ignore/index.js:590:29)
    at Ignore.filter (node_modules/@nuxt/builder/dist/builder.js:65:26)
    at Builder.resolveFiles (node_modules/@nuxt/builder/dist/builder.js:341:24)
    at async Builder.resolveRelative (node_modules/@nuxt/builder/dist/builder.js:348:13)
```

### Apply fix:
```bash
make app_working
```

- Starting in `ignore@^5.2.0` it was introduced the ability to accept `allowRelativePaths` as an option to be backward compatibility with previos version.
  source: https://www.npmjs.com/package/ignore
- In this case a fix was applied to `@nuxt/builder` to accept ignoreOptions through the nuxt configuration, as the class Ignore Already accepted, BUT, for some reason, it was never passed down.
https://github.com/lgcardeas/Nuxt_Relative_Path_Not_Working/blob/bd394404f95417cea259a532eb85bad6bda8d423/Dockerfile_working#L12

```bash
........
ℹ Waiting for file changes
ℹ Memory usage: 224 MB (RSS: 351 MB)
ℹ Listening on: http://172.17.0.2:3000/
Loading auth middleware
```

