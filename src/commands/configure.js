const { Command } = require('@oclif/command');
const { existsSync, readFileSync } = require('fs');
const ProcessCommand = require('./process.js')
const FileCommand = require('./file.js');
const NetCommand = require('./net.js');

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
            ProcessCommand.run(['--command', c.command])
            break;
          case 'file':
            FileCommand.run(['--filepath', c.filepath, '--action', c.action]);
            break;
          case 'net':
            NetCommand.run(['--url', c.url])
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
