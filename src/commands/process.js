const {Command, flags} = require('@oclif/command')
const ProcessEvent = require('../util/processEvent.js')

class ProcessCommand extends Command {
  async run() {
    const {flags} = this.parse(ProcessCommand)

    if (flags.command) {
      const event = new ProcessEvent(flags.command)
      event.run()
    }
  }
}

ProcessCommand.description = 'Runs a process'

ProcessCommand.flags = {
  command: flags.string({char: 'c', description: 'Command to execute'}),
}

module.exports = ProcessCommand
