const { mkdirSync, readFileSync, writeFileSync } = require('fs');
const paths = require('./paths.js');

const initLogs = () => {
  mkdirSync(paths.EDR_EVENTS_HOME, err => {
    if (err) {
      console.error('Logs directory already exists.')
    };
  })
  
  writeFileSync(paths.EDR_LOG, '[]', err => {
    if (err) {
      console.error('Log file already exists.')
    };
  })

}


const logEvent = (event) => {
  const logs = JSON.parse(readFileSync(paths.EDR_LOG))
  
  logs.push(event);

  writeFileSync(paths.EDR_LOG, JSON.stringify(logs), err => {
    if (err) {
      console.err(err);
    };
  })
}

module.exports = {
  initLogs,
  logEvent,
}