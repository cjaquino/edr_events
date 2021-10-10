const {Command, flags} = require('@oclif/command')
const NetEvent = require('../util/netEvent.js')

class NetCommand extends Command {
  async run() {
    const { flags } = this.parse(NetCommand)
    const e = new NetEvent(flags.url)
    e.run();
  }
}

NetCommand.description = 'Creates a network connection';

NetCommand.flags = {
  url: flags.string({char: 'u', description: 'URL to connect to'}),
}

module.exports = NetCommand
