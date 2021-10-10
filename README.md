edr_events
==========



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/edr_events.svg)](https://npmjs.org/package/edr_events)
[![Downloads/week](https://img.shields.io/npm/dw/edr_events.svg)](https://npmjs.org/package/edr_events)
[![License](https://img.shields.io/npm/l/edr_events.svg)](https://github.com/cjaquino/edr_events/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g edr_events
$ edr_events COMMAND
running command...
$ edr_events (-v|--version|version)
edr_events/0.0.0 linux-x64 node-v16.9.1
$ edr_events --help [COMMAND]
USAGE
  $ edr_events COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`edr_events file`](#edr_events-file)
* [`edr_events hello`](#edr_events-hello)
* [`edr_events help [COMMAND]`](#edr_events-help-command)
* [`edr_events init`](#edr_events-init)
* [`edr_events net`](#edr_events-net)
* [`edr_events process`](#edr_events-process)

## `edr_events file`

Creates, modifies, or deletes a file.

```
USAGE
  $ edr_events file

OPTIONS
  -a, --action=action      Action to perform: create, modify, delete
  -f, --filepath=filepath  Path of the file to be created, modified, or deleted.
```

_See code: [src/commands/file.js](https://github.com/cjaquino/edr_events/blob/v0.0.0/src/commands/file.js)_

## `edr_events hello`

Describe the command here

```
USAGE
  $ edr_events hello

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/hello.js](https://github.com/cjaquino/edr_events/blob/v0.0.0/src/commands/hello.js)_

## `edr_events help [COMMAND]`

display help for edr_events

```
USAGE
  $ edr_events help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.3/src/commands/help.ts)_

## `edr_events init`

Scaffolds file structure for EDR Telemetry events

```
USAGE
  $ edr_events init
```

_See code: [src/commands/init.js](https://github.com/cjaquino/edr_events/blob/v0.0.0/src/commands/init.js)_

## `edr_events net`

Describe the command here

```
USAGE
  $ edr_events net

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/net.js](https://github.com/cjaquino/edr_events/blob/v0.0.0/src/commands/net.js)_

## `edr_events process`

Runs a process

```
USAGE
  $ edr_events process

OPTIONS
  -c, --command=command  Command to execute
```

_See code: [src/commands/process.js](https://github.com/cjaquino/edr_events/blob/v0.0.0/src/commands/process.js)_
<!-- commandsstop -->
