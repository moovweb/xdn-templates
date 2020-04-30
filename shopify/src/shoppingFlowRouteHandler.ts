import { CACHE_PAGES } from './cache'
import { RouteHandler } from '@xdn/core/router/Router'

const handler: RouteHandler = async ({
  cache,
  removeResponseHeader,
  updateResponseHeader,
  setRequestHeader,
  proxy,
}) => {
  cache(CACHE_PAGES)
  removeResponseHeader('set-cookie')
  await proxy('origin')
  updateResponseHeader('location', /https:\/\/moovdemo.myshopify.com/gi, '') // convert absolute redirects to origin to relative so that the user isn't transferred to the origin.
  setRequestHeader(
    'cookie',
    'storefront_digest=08acd7b73b08a96c8a5d1c05a2e5a0b40162fda170d22b0fccc0b2d48d6cb442'
  )
}

export default handler
