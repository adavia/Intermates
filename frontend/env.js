const env = process.env.ENV || 'development'

const configs = {
  development: {
    api: 'http://localhost:4000/api',
    socket: 'ws://localhost:4000/socket'
  },
  staging: {
    api: 'https://api.staging.com'
  },
  production: {
    api: 'https://api.production.com'
  }
}[env]

export default configs