module.exports = {
  routes: './dist/routes.js',
  backends: {
    origin: {
      domainOrIp: '{answers.origin}',
      hostHeader: '{answers.origin}',
    },
  },
}
