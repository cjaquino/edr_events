const { join } = require('path');
const { homedir } = require('os');

const HOME = homedir();
const EDR_TEST_HOME = join(HOME, '/EDRTest')
const EDR_LOG = join(EDR_TEST_HOME, '/logs.json')


module.exports = {
  HOME,
  EDR_TEST_HOME,
  EDR_LOG,
}