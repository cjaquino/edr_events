const { Command } = require('@oclif/command');
const { existsSync, readFileSync } = require('fs');
const ProcessEvent = require('../util/processEvent')
const FileEvent = require('../util/fileEvent');
const NetEvent = require('../util/netEvent');

class ConfigureCommand extends Command {
  static args = [
    {name: 'filepath'}
  ]

  async run() {
    const { args } = this.parse(ConfigureCommand);
    
    const filepath = args.filepath;

    if (existsSync(filepath)) {
      const config = JSON.parse(readFileSync(filepath));
      config.forEach(c => {
        switch(c.type) {
          case 'process':
            const p = new ProcessEvent(c.command);
            p.run();
            break;
          case 'file':
            const f = new FileEvent(c.filepath, c.action);
            f.run();
            break;
          case 'net':
            const n = new NetEvent(c.url)
            n.run();
            break;
          default:
            break;
        }

      })
    } else {
      console.log(`${filepath} does not exist.`)
    }
  }
}

ConfigureCommand.description = 'Pass a config file here to run multiple events.'

module.exports = ConfigureCommand
