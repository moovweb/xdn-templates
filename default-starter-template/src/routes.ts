import { Router } from '@layer0/core/router'
import { starterRoutes } from '@layer0/starter'
import { CACHE_ASSETS } from './cache'
import routeHandler from './route-handler'

export default new Router()
  .use(starterRoutes)

  
  // example routes for cacheable pages:
  .get('/', routeHandler)
  .get('/collections/:path*', routeHandler)
  .get('/products/:path*', routeHandler)
  
  // example route for cacheable assets:
  .match('/images/:path*', ({ cache, proxy }) => {
    cache(CACHE_ASSETS)
    return proxy('origin')
  })

  // fallback route for all other requests:
  .fallback(({ proxy }) => {
    proxy('origin')
  })

  //////////////////////////////////////////////////////////
  ////////// Static Prerendering examples       ////////////
  //////////////////////////////////////////////////////////
  //
  // More details at:
  // https://developer.moovweb.com/guides/static_prerendering
  // 
  // append this to the router call above before .fallback to enable
  // .prerender([
  //   // HTML pages
  //   { path: '/' },
  //   { path: '/categories/mens' },
  //
  //   // API responses
  //   { path: '/api/index.json' },
  //   { path: '/api/categories/mens.json' },
  // ])