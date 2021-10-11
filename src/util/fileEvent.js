const EDREvent = require("./EDREvent");
const { existsSync } = require('fs');
const { execSync } = require('child_process');
const { logEvent } = require('./logs.js');

const touchFile = (filepath) => {
  return execSync(`touch ${filepath}`)
  // , (err, stdout, stderr) => {
  //   if (err) {
  //     console.error(`error: ${err.message}`);
  //     return;
  //   }

  //   if (stderr) {
  //     console.error(`stderr: ${stderr}`);
  //     return;
  //   }
  // })
}

const deleteFile = (filepath) => {
  return execSync(`rm ${filepath}`)
  // , (err, stdout, stderr) => {
  //   if (err) {
  //     console.error(`error: ${err.message}`);
  //     return;
  //   }

  //   if (stderr) {
  //     console.error(`stderr: ${stderr}`);
  //     return;
  //   }
  // })
}

class FileEvent extends EDREvent {
  constructor(filepath, action) {
    super();
    this.filepath = filepath;
    this.action = action;
  }

  run() {
    const ACTIONS = ['create', 'modify', 'delete'];

    if (!ACTIONS.includes(this.action.toLowerCase())) {
      console.log(`Action provided is not valid. Valid actions: ${ACTIONS.join(', ')}`);
      return;
    }

    switch (this.action.toLowerCase()) {
      case 'create':
        this.createFile();
        break;
      case 'modify':
        this.modifyFile();
        break;
      case 'delete':
        this.deleteFile();
        break;
      default:
        break;
    }
  }

  createFile() {
    if (!existsSync(this.filepath)) {
      const proc = touchFile(this.filepath);
      this.pid = proc.pid;
      this.processName = 'touch';
      this.processCLI = `touch ${this.filepath}`;
      logEvent(this);
    } else {
      console.log(`${this.filepath} already exists.`)
    }
  }

  modifyFile() {
    if (existsSync(this.filepath)) {
      const proc = touchFile(this.filepath);
      this.pid = proc.pid;
      this.processName = 'touch';
      this.processCLI = `touch ${this.filepath}`;
      logEvent(this);
    } else {
      console.log(`${this.filepath} does not exist. Cannot modify.`)
    }
    
  }

  deleteFile() {
    if (existsSync(this.filepath)) {
      const proc = deleteFile(this.filepath);
      this.pid = proc.pid;
      this.processName = 'rm';
      this.processCLI = `rm ${this.filepath}`;
      logEvent(this);
    } else {
      console.log(`${this.filepath} does not exist. Cannot delete.`)
    }
    
  }
}

module.exports = FileEvent;