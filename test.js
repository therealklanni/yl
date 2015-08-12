import test from 'tape'
import Yl from './lib'

test('yl', t => {
  t.plan(1000)

  let ret = Yl(i => {
    t.ok(i+1, 'iteration '+ i)
    return i ? !i : 'done'
  }, 999)

  t.equal(ret, 'done', 'return value is ok')
})
