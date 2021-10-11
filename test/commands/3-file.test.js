const {expect, test} = require('@oclif/test')
const paths = require('../../src/util/paths')
const {readFileSync, existsSync} = require('fs')

describe('file', () => {
  test
  .command(['file', '-f', `${paths.EDR_EVENTS_HOME}/testfile.txt`, '-a', 'create'])
  .it('creates testfile.txt', ctx => {
    let testFileExists = existsSync(`${paths.EDR_EVENTS_HOME}/testfile.txt`)
    expect(testFileExists).to.equal(true)

    let logs = readFileSync(paths.EDR_LOG)
    let result = JSON.parse(logs).find(e => e.action === 'create' && e.processName === 'touch')
    expect(result).to.not.equal(undefined);
  })

  test
  .command(['file', '-f', `${paths.EDR_EVENTS_HOME}/testfile.txt`, '-a', 'modify'])
  .it('modifies testfile.txt', ctx => {
    let testFileExists = existsSync(`${paths.EDR_EVENTS_HOME}/testfile.txt`);
    expect(testFileExists).to.equal(true)

    let logs = readFileSync(paths.EDR_LOG)
    let result = JSON.parse(logs).find(e => e.action === 'modify' && e.processName === 'touch')
    expect(result).to.not.equal(undefined)
  })

  test
  .command(['file', '-f', `${paths.EDR_EVENTS_HOME}/testfile.txt`, '-a', 'delete'])
  .it('deletes testfile.txt', ctx => {
    let testFileExists = existsSync(`${paths.EDR_EVENTS_HOME}/testfile.txt`)
    expect(testFileExists).to.equal(false)

    let logs = readFileSync(paths.EDR_LOG)
    let result = JSON.parse(logs).find(e => e.action === 'delete' && e.processName === 'rm')
    expect(result).to.not.equal(undefined)
  })
})
