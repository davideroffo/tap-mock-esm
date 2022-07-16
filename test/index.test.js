import { test } from 'tap'
import esmock from 'esmock'

test('isMemoryAvailable', async t => {
  t.test('should return false if memory === 0', async t => {
    const mockedIndexModule = await esmock('../src/index.js', {
      os: {
        freemem: () => 0
      }
    })

    t.equal(mockedIndexModule.isMemoryAvailable(), false)
  })
})
