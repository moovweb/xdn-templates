import { CACHE_PAGES } from './cache'
import { RouteHandler } from '@xdn/core/router/Router'

const handler: RouteHandler = ({ cache, removeResponseHeader, setRequestHeader }) => {
  cache(CACHE_PAGES)
  removeResponseHeader('set-cookie')
  setRequestHeader(
    'cookie',
    'storefront_digest=08acd7b73b08a96c8a5d1c05a2e5a0b40162fda170d22b0fccc0b2d48d6cb442'
  )
}

export default handler
