edr_events
==========
<!-- toc -->
* [Introduction](#introduction)
* [Usage](#usage)
* [Notes](#notes)
* [Configuration](#configuration)
* [Commands](#commands)
<!-- tocstop -->

# Introduction
<!-- introduction -->
`edr_events` is a tool that generates that generates events such as process creation, file manipulation, and network connection. These events will be used to test proper functionality of the Red Canary EDR agents.
<!-- introductionstop -->

# Usage
<!-- usage -->
Once cloned and linked, the user can either run singlar events or pass a configuration file to run a series of events. You must run `edr_events init` first to scaffold the logs file.

```sh-session
SETUP
$ git clone https://github.com/cjaquino/edr_events.git
$ npm install
$ npm link
$ edr_events init
$ edr_events --help [COMMAND]
USAGE
  $ edr_events COMMAND
...
```
<!-- usagestop -->

# Notes
<!-- notes -->
### Supported Operating Systems
Ubuntu 20.04 - Node version 16.9.1
MacOS Big Sur 11.5.2 - Node version 16.10.0

### Future Improvements
- Support for Windows OS.
- Expand network event to include other protocols like http/s. Currently it only creates a tcp connection to the provided url.
- Refactor logging to include different file formats.
- Add a cleanup command to remove any files generated by `edr_events`
<!-- notesstop -->

# Configuration
<!-- configuration -->
The configuration file is a json file that states what events we want `edr_events` to run. See `sample_config.json` (below).

```json
[
  {
    "type": "process",
    "command": "echo 'testing edr_events'"
  },
  {
    "type": "file",
    "action": "create",
    "filepath": "./RC_Test.txt"
  },
  {
    "type": "file",
    "action": "modify",
    "filepath": "./RC_Test.txt"
  },
  {
    "type": "file",
    "action": "delete",
    "filepath": "./RC_Test.txt"
  },
  {
    "type": "net",
    "url": "google.com"
  }
]
```
<!-- configurationstop -->

# Commands
<!-- commands -->
* [`edr_events init`](#edr_events-init)
* [`edr_events configure [FILEPATH]`](#edr_events-configure-filepath)
* [`edr_events process`](#edr_events-process)
* [`edr_events file`](#edr_events-file)
* [`edr_events net`](#edr_events-net)
* [`edr_events help [COMMAND]`](#edr_events-help-command)

## `edr_events init`

Scaffolds file structure for EDR Telemetry events

```
USAGE
  $ edr_events init
```

_See code: [src/commands/init.js](https://github.com/cjaquino/edr_events/blob/v0.0.0/src/commands/init.js)_

## `edr_events configure [FILEPATH]`

Pass a config file here to run multiple events.

```
USAGE
  $ edr_events configure [FILEPATH]
```

_See code: [src/commands/configure.js](https://github.com/cjaquino/edr_events/blob/v0.0.0/src/commands/configure.js)_

## `edr_events process`

Runs a process

```
USAGE
  $ edr_events process

OPTIONS
  -c, --command=command  Command to execute
```

_See code: [src/commands/process.js](https://github.com/cjaquino/edr_events/blob/v0.0.0/src/commands/process.js)_

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

## `edr_events net`

Creates a network connection

```
USAGE
  $ edr_events net

OPTIONS
  -u, --url=url  URL to connect to
```

_See code: [src/commands/net.js](https://github.com/cjaquino/edr_events/blob/v0.0.0/src/commands/net.js)_

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
<!-- commandsstop -->
