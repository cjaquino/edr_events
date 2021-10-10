const { logEvent } = require('./logs.js')
const { exec } = require('child_process');
const { userInfo } = require('os');

class ProcessEvent {
  constructor(command) {
    this.timestamp = new Date();
    this.user = userInfo().username;
    this.processName = command.split(' ')[0];
    this.processCLI = command;
  }

  run() {
    exec(this.processCLI, (err, stdout, stderr) => {
      if (err) {
        console.error(`error: ${err.message}`);
        return;
      }
  
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
  
      console.log(`stdout: ${stdout}`)
  
      this.pid = process.pid;
      logEvent(this);
    })
  }


}

module.exports = ProcessEvent;