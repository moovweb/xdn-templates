# {answers.name}
XDN starter demo for https://{answers.origin}

## Links
- Preview: ...
- XDN app: ...

## Quick start
1. Run [Development -> setup](#setup) commands
2. Run [Development -> start](#start) commands
3. Go to `src/routes.ts` file & define your app routes to cache them on XDN
4. See more info on [XDN Starter Guide](https://developer.moovweb.com/guides/starter)

## Development
### setup
```
nvm use
npm i
```

### start
```
npm run start
```

### start (with cache enabled)
```
npm run start:cache
```

### start (production mode)
```
npm run start:prod
```

### lint
```
npm run lint(:check)
npm run lint:fix
```

### typescript
```
npm run ts(:check)
npm run ts:watch
```

## Deployment
Push/merge to `master` branch for automatic deploy,
or use:
```
npm run build
npm run deploy
```

## Other
### update @xdn/.. to latest version
```
npm run xdn:update
```

### xdn development: link @xdn/.. local packages via `yalc`
```
npm run xdn:link
```
