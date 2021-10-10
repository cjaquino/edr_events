const {Command, flags} = require('@oclif/command');
const processEvent = require('../util/processEvent.js');

class ProcessCommand extends Command {
  async run() {
    const { flags } = this.parse(ProcessCommand)

    if (flags.command) {
      const proc = new processEvent(flags.command);
      proc.run();
    }
  }
}

ProcessCommand.description = 'Runs a process'

ProcessCommand.flags = {
  command: flags.string({ char: 'c', description: 'Command to execute'})
}

module.exports = ProcessCommand
