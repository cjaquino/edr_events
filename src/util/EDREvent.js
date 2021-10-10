const { userInfo } = require('os');

class EDREvent {
  constructor() {
    this.timestamp = new Date();
    this.user = userInfo().username;
  }
}

module.exports = EDREvent;