const {expect, test} = require('@oclif/test')
const paths = require('../../src/util/paths')
const {existsSync} = require('fs')

describe('init', () => {
  test
  .command(['init'])
  .it('scaffolds EDREvents dir with logs.json file', _ => {
    let testFileExists = existsSync(paths.EDR_LOG)
    expect(testFileExists).to.equal(true)
  })
})
