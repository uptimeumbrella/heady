import test from 'ava'
import isPresent from 'is-present'

import heady from './'

test('returns successfully when it should', async t => {
  t.plan(2)

  const res = await heady('google.com')

  t.is(res.code, 200)
  t.truthy(isPresent(res.headers))
})

test('returns an error with a bad url', async t => {
  t.plan(2)

  const res = await heady('foo.bar')

  t.is(res.code, 500)
  t.truthy(isPresent(res.err))
})
