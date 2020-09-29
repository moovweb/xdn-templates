import { RouteHandler } from '@xdn/core/router/Router';
import { CACHE_ASSETS } from './cache';

const assetsRouteHandler: RouteHandler = async ({
  cache,
  removeUpstreamResponseHeader,
  proxy,
}) => {
  cache(CACHE_ASSETS);

  // the presence of a set-cookie header would prevent the response from being cached,
  // so ensure set-cookie headers are removed.
  removeUpstreamResponseHeader('set-cookie');

  await proxy('origin');
};

export default assetsRouteHandler;
