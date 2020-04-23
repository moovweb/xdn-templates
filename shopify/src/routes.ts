import { Router } from '@xdn/core/router'
import { CACHE_ASSETS, CACHE_SERVICE_WORKER } from './cache'
import shoppingFlowRouteHandler from './shoppingFlowRouteHandler'

export default new Router()
  .match('/', shoppingFlowRouteHandler)
  .match('/collections/*path', shoppingFlowRouteHandler)
  .match('/products/*path', shoppingFlowRouteHandler)
  .match('/service-worker.js', ({ serveStatic, cache }) => {
    cache(CACHE_SERVICE_WORKER)
    return serveStatic('dist/service-worker.js')
  })
  .match('/main.js', ({ serveStatic, cache }) => {
    cache(CACHE_ASSETS)
    return serveStatic('dist/browser.js')
  })
  .match('/content/*path', ({ proxy }) => {
    return proxy('origin', { path: '{path}' })
  })
  .match('/*path', ({ proxy }) => {
    return proxy('origin')
  })
