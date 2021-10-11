const {mkdirSync, readFileSync, writeFileSync} = require('fs')
const paths = require('./paths.js')

const initLogs = () => {
  mkdirSync(paths.EDR_EVENTS_HOME, error => {
    if (error) {
      console.error('Logs directory already exists.')
    }
  })

  writeFileSync(paths.EDR_LOG, '[]', error => {
    if (error) {
      console.error('Log file already exists.')
    }
  })
}

const logEvent = event => {
  const logs = JSON.parse(readFileSync(paths.EDR_LOG))

  logs.push(event)

  writeFileSync(paths.EDR_LOG, JSON.stringify(logs), error => {
    if (error) {
      console.err(error)
    }
  })
}

module.exports = {
  initLogs,
  logEvent,
}
