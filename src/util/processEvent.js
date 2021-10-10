const { logEvent } = require('./logs.js')
const { exec } = require('child_process');
const EDREvent = require('./EDREvent.js');

class ProcessEvent extends EDREvent{
  constructor(command) {
    super();
    this.processName = command.split(' ')[0];
    this.processCLI = command;
  }

  run() {
    const proc = exec(this.processCLI, (err, stdout, stderr) => {
      if (err) {
        console.error(`error: ${err.message}`);
        return;
      }
  
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
  
      console.log(`stdout: ${stdout}`)
    })
  
    // TODO: don't log if there are errors
    // console.log(proc);
    // console.log('process name: ', proc.spawnargs[0]);
    // console.log('process cli: ', proc.spawnargs.join(' '));
    // console.log('process id: ', proc.pid);
    this.pid = proc.pid;
    logEvent(this);
  }


}

module.exports = ProcessEvent;