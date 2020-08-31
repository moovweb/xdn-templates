import { CACHE_ASSETS } from './cache';
import { Router } from '@xdn/core/router'
import shoppingFlowRouteHandler from './shoppingFlowRouteHandler'

export default new Router()
  .get('/service-worker.js', ({ serviceWorker }) => {
    serviceWorker('dist/service-worker.js')
  })
  // example routes for cacheable pages:
  .get('/', shoppingFlowRouteHandler)
  .get('/collections/:path*', shoppingFlowRouteHandler)
  .get('/products/:path*', shoppingFlowRouteHandler)
  // example route for cacheable assets:
  .match('/images/:path*', ({ cache, proxy }) => {
    cache(CACHE_ASSETS)
    return proxy('origin')
  })
  // fallback route for all other requests:
  .fallback(({ proxy }) => {
    proxy('origin')
  })
