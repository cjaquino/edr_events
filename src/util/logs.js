const { mkdir, readFile, writeFile } = require('fs');
const paths = require('./paths.js');

const initLogs = async () => {
  await mkdir(paths.EDR_EVENTS_HOME, err => {
    if (err) {
      console.error('Logs directory already exists.')
    };
  })

  await writeFile(paths.EDR_LOG, '[]', err => {
    if (err) {
      console.error('Log file already exists.')
    };
  })
}


const logEvent = (event) => {
  readFile(paths.EDR_LOG, (err, data) => {
    const logs = JSON.parse(data);

    logs.push(event);

    writeFile(paths.EDR_LOG, JSON.stringify(logs), err => {
      if (err) {
        console.err(err);
      };
    })
  })
}

module.exports = {
  initLogs,
  logEvent,
}