const net = require('net');
const EDREvent = require('./EDREvent');
const { logEvent } = require('./logs');

class NetEvent extends EDREvent {
  constructor(url) {
    super();
    this.url = url;
  }

  run() {
    const client = net.createConnection(80, this.url, () => {
      this.srcAddr = `${client.localAddress}:${client.localPort}`
      this.destAddr = `${client.remoteAddress}:${client.remotePort}`
      this.bytesWritten = client.bytesWritten;
      this.protocol = 'tcp';

      const logObj = {
        timestamp: this.timestamp,
        user: this.user,
        destAddr: this.destAddr,
        srcAddr: this.srcAddr,
        bytesWritten: this.bytesWritten,
        protocol: this.protocol,
        processName: 'node',
        processCLI: 'node',
        pid: process.pid
      }

      logEvent(logObj);
      client.end();
    });
  }
}

module.exports = NetEvent;