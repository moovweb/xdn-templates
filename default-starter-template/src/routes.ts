import { Router } from '@xdn/core/router';
import shoppingFlowRouteHandler from './shoppingFlowRouteHandler';
import assetsRouteHandler from './assetsRouteHandler';

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
  .get('/subcategory/:path*', shoppingFlowRouteHandler)
  /**
   * Pages: PDP
   */
  .get('/product/:path*', shoppingFlowRouteHandler)
  /**
   * Pages: Search
   */
  .get('/search/:path*', shoppingFlowRouteHandler)
  /**
   * Assets: Images
   */
  .match('/images/:path*', assetsRouteHandler)
  /**
   * Assets: XDN
   */
  .get('/service-worker.js', ({ serviceWorker }) => {
    serviceWorker('dist/service-worker.js');
  })
  .get('/main.js', ({ serviceWorker }) => {
    serviceWorker('dist/browser.js');
  })
  /**
   * Fallback
   */
  .fallback(({ proxy }) => {
    proxy('origin');
  });
