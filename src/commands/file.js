const {Command, flags} = require('@oclif/command')
const FileEvent = require('../util/fileEvent')

class FileCommand extends Command {
  async run() {
    const { flags } = this.parse(FileCommand)

    const e = new FileEvent(flags.filepath, flags.action);
    e.run();

  }
}

FileCommand.description = 'Creates, modifies, or deletes a file.'

FileCommand.flags = {
  filepath: flags.string({char: 'f', description: 'Path of the file to be created, modified, or deleted.'}),
  action: flags.string({char: 'a', description: 'Action to perform: create, modify, delete'}),
}

module.exports = FileCommand
