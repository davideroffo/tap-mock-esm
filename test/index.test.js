import { test } from 'tap'

test('isMemoryAvailable', t => {
  t.plan(1)

  t.test('should return false if memory === 0', t => {
    t.plan(1)

    const mockedIndexModule = t.mock('./src/index', {
      os: {
        freemem: () => 0
      }
    })

    t.equal(mockedIndexModule.isMemoryAvailable(), false)
  })
})
