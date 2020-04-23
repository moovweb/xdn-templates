import { Router } from '@xdn/core/router'

export default new Router().fallback(({ proxy }) => {
  return proxy('origin')
})
