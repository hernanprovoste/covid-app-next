const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        MONGODB_USERNAME: 'hernan',
        MONGODB_PASSWORD: 'colocolo91',
        MONGODB_CLUSTER: 'sandbox',
        MONGODB_DATABASE: 'covid_traceability'
      }
    }
  }

  return {
    reactStrictMode: true,
    env: {
      MONGODB_USERNAME: 'hernan',
      MONGODB_PASSWORD: 'colocolo91',
      MONGODB_CLUSTER: 'sandbox',
      MONGODB_DATABASE: 'covid_traceability'
    }
  }
}
