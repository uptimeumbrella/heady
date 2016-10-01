import test from 'ava'
import heady from './'

test('heady does something awesome', async t => {
  const res = await heady('google.com')
  t.is(res.statusCode, 200)
})
