import { skipWaiting, clientsClaim } from 'workbox-core';
import { Prefetcher, prefetch } from '@xdn/prefetch/sw';
import DeepFetchPlugin, { DeepFetchCallbackParam } from '@xdn/prefetch/sw/DeepFetchPlugin';
import cacheHost from './cacheHost';

skipWaiting();
clientsClaim();

function deepFetchResponsiveImages({ $el/* , el, $ */ }: DeepFetchCallbackParam) {
  const urlTemplate = $el.attr('data-src');
  const dataWidths = $el.attr('data-widths');

  if (dataWidths && urlTemplate) {
    const widths: number[] = JSON.parse(dataWidths);

    widths.slice(0, 2).forEach((width) => {
      const url = urlTemplate?.replace(/\{width\}/, width);
      prefetch(url, 'image');
    });
  }
}

new Prefetcher({
  cacheHost,
  plugins: [
    new DeepFetchPlugin([
      {
        selector: 'img.product-featured-media',
        maxMatches: 1,
        attribute: 'src',
        as: 'image',
      },
      {
        selector: 'img.grid-view-item__image',
        maxMatches: 4,
        attribute: 'src',
        as: 'image',
        callback: deepFetchResponsiveImages,
      },
    ]),
  ],
})
  .route()
  .cache(/^https:\/\/cdn\.shopify\.com\/.*/);
