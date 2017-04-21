import test from 'tape'
import Yl from './lib'

test('complete iteration', t => {
  const n = 1000

  t.plan(n + 1)

  let ret = Yl(i => {
    t.ok(i + 1, 'iteration ' + (n - i))
    return i ? !i : 'done'
  }, n)

  t.equal(ret, 'done', 'return value is ok')
})

test('aborted early iteration', t => {
  const n = 1000

  t.plan(51)

  let ret = Yl(i => {
    t.ok(i + 1, 'iteration ' + (n + i))
    return i % 50 ? !i : i
  }, n)

  t.equal(ret, 950, 'return value is ok')
})
