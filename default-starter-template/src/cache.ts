const TIME_1H = 60 * 60;
const TIME_4H = TIME_1H * 4;
const TIME_1D = TIME_1H * 24;

/**
 * The default cache setting for pages in the shopping flow
 */
export const CACHE_PAGES = {
  edge: {
    maxAgeSeconds: TIME_4H,
    forcePrivateCaching: true,
  },
  browser: {
    maxAgeSeconds: 0,
    serviceWorkerSeconds: TIME_4H,
  },
};

/**
 * The default cache setting for static assets like JS, CSS, and images.
 */
export const CACHE_ASSETS = {
  edge: {
    maxAgeSeconds: TIME_1D,
    forcePrivateCaching: true,
  },
  browser: {
    maxAgeSeconds: 0,
    serviceWorkerSeconds: TIME_1D,
  },
};
