import test from 'ava'
import isPresent from 'is-present'

import heady from './'

test('returns successfully when it should', async t => {
  t.plan(2)

  const res = await heady('https://google.com')

  t.is(res.code, 200)
  t.ok(isPresent(res.headers))
})
