const {expect, test} = require('@oclif/test')
const paths = require('../../src/util/paths')
const {readFileSync} = require('fs')

describe('process', () => {
  test
  .stdout()
  .command(['process', '-c', "echo hello"])
  .it('echoes hello', ctx => {
    expect(ctx.stdout).to.contain('hello')
    let logs = readFileSync(paths.EDR_LOG)
    let result = JSON.parse(logs).find(e => e.processCLI === 'echo hello')
    expect(result).to.not.equal(undefined)
  })
})
