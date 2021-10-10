const { Command } = require('@oclif/command')
const { initLogs } = require('../util/logs.js')

class InitCommand extends Command {
  async run() {
    initLogs();
  }
}

InitCommand.description = 'Scaffolds file structure for EDR Telemetry events'

module.exports = InitCommand
