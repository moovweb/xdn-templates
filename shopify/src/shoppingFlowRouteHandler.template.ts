import { RouteHandler } from '@xdn/core/router/Router';
import { CACHE_PAGES } from './cache';

const handler: RouteHandler = async ({
  cache,
  removeResponseHeader,
  updateResponseHeader,
  proxy,
}) => {
  cache(CACHE_PAGES);
  removeResponseHeader('set-cookie');
  proxy('origin');
  // convert absolute redirects to origin to relative so that the user isn't transferred to the origin.
  updateResponseHeader('location', /https:\/\/{answers.origin}\//gi, '/');
};

export default handler;
