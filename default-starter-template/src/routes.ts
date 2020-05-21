import { Router } from '@xdn/core/router'

export default new Router()
  .get('/service-worker.js', ({ serviceWorker }) => {
    serviceWorker('dist/service-worker.js')
  })
  .fallback(({ proxy }) => {
    proxy('origin')
  })
