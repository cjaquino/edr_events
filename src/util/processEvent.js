const {logEvent} = require('./logs.js')
const {exec} = require('child_process')
const EDREvent = require('./EDREvent.js')

class ProcessEvent extends EDREvent {
  constructor(command) {
    super()
    this.processName = command.split(' ')[0]
    this.processCLI = command
  }

  run() {
    const proc = exec(this.processCLI, (error, stdout, stderr) => {
      if (error) {
        console.error(`error: ${error.message}`)
        return
      }

      if (stderr) {
        console.error(`stderr: ${stderr}`)
        return
      }

      console.log(`stdout: ${stdout}`)
    })

    this.pid = proc.pid
    logEvent(this)
  }
}

module.exports = ProcessEvent
