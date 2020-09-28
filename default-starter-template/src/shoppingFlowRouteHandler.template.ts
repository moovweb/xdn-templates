import { RouteHandler } from '@xdn/core/router/Router';
import { CACHE_PAGES } from './cache';
import transformResponse from './transformResponse';

const shoppingFlowRouteHandler: RouteHandler = async ({
  cache,
  removeUpstreamResponseHeader,
  updateResponseHeader,
  proxy,
}) => {
  cache(CACHE_PAGES);

  // the presence of a set-cookie header would prevent the response from being cached,
  // so ensure set-cookie headers are removed.
  removeUpstreamResponseHeader('set-cookie');

  await proxy('origin', { transformResponse });

  // convert absolute redirects to origin to relative
  // so that the user isn't transferred to the origin.
  updateResponseHeader('location', /https?:\/\/{answers.origin}\//gi, '/'); // add your origin here
};

export default shoppingFlowRouteHandler;
