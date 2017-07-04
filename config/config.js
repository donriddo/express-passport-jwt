// config/config.js

// required environment variables
([
  'NODE_ENV',
  'PORT'
]).forEach((name) => {
  if (!process.env[name]) {
    throw new Error(`Environment variable ${name} is missing`)
  }
})

let settings;

if (process.env.NODE_ENV === 'production') {
  settings = require('./env/production');
} else {
  settings = require('./env/development');
}

module.exports = {
  env: process.env.NODE_ENV,
  logger: {
    level: process.env.LOG_LEVEL || 'info',
    enabled: process.env.BOOLEAN ? process.env.BOOLEAN.toLowerCase() === 'true' : false
  },
  server: {
    port: Number(process.env.PORT)
  },
  settings: settings
  // ...
}
