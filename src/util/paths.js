const { join } = require('path');
const { homedir } = require('os');

const HOME = homedir();
const EDR_EVENTS_HOME = join(HOME, '/EDREvents')
const EDR_LOG = join(EDR_EVENTS_HOME, '/logs.json')


module.exports = {
  HOME,
  EDR_EVENTS_HOME,
  EDR_LOG,
}