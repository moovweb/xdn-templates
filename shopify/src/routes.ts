import { Router } from '@xdn/core/router';
import { CACHE_ASSETS, CACHE_SERVICE_WORKER } from './cache';
import shoppingFlowRouteHandler from './shoppingFlowRouteHandler';

/**
 * Define your app routes here ...
 */
export default new Router()
  /**
   * Pages: Home
   */
  .get('/', shoppingFlowRouteHandler)
  /**
   * Pages: PLP
   */
  .get('/collections/:path*', shoppingFlowRouteHandler)
  /**
   * Pages: PDP
   */
  .get('/product/:path*', shoppingFlowRouteHandler)
  /**
   * Pages: Search
   */
  .get('/search/:path*', shoppingFlowRouteHandler)
  /**
   * Data: Late load content
   */
  .get('/content/:path*', ({ proxy }) => {
    proxy('origin', { path: '/:path' });
  })
  /**
   * Assets: Images
   */
  .get('/favicon.ico', ({ proxy, cache }) => {
    cache(CACHE_ASSETS);
    proxy('origin');
  })
  /**
   * Assets: XDN
   */
  .get('/main.js', ({ serveStatic, cache }) => {
    cache(CACHE_ASSETS);
    serveStatic('dist/browser.js');
  })
  .get('/install.js', ({ serveStatic, cache }) => {
    cache(CACHE_ASSETS);
    serveStatic('dist/install.js');
  })
  .get('/service-worker.js', ({ serviceWorker, cache }) => {
    cache(CACHE_SERVICE_WORKER);
    serviceWorker('dist/service-worker.js');
  })
  /**
   * Fallback
   */
  .fallback(({ proxy }) => {
    proxy('origin');
  });
