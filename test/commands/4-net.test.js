const {expect, test} = require('@oclif/test')
const paths = require('../../src/util/paths')
const {readFileSync} = require('fs')

describe('net', () => {
  test
  .stdout()
  .command(['net', '-u', 'google.com'])
  .it('establishes a tcp connection', ctx => {
    expect(ctx.stdout).to.contain('client connected')

    setTimeout(() => {
      let logs = JSON.parse(readFileSync(paths.EDR_LOG))
      let result = logs.find(event => Object.keys(event).includes('srcAddr'))
      expect(result).to.not.equal(undefined)
    }, 2000)
  })
})
