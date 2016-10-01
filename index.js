const got = require('got')
const isBlank = require('is-blank')

module.exports = url => {
  if (isBlank(url) || typeof url !== 'string') {
    throw new TypeError('heady expected a url as a string')
  }

  const start = process.hrtime()
  const opts = { timeout: 2000 }

  return got.head(url, opts)
    .then(res => receive(res, start))
    .catch(err => ({ code: 500, err, time: diff(start) }))
}

const receive = (res, start) => {
  return {
    code: res.statusCode,
    time: diff(start),
    headers: res.headers
  }
}

const diff = start => {
  const diff = process.hrtime(start)
  return diff[0] * 1e3 + diff[1] * 1e-6
}

// Response time algorithm from Doug Wilson in response-time
//   => https://github.com/expressjs/response-time/blob/1e8b4be1378ec4bc6371f0f8c16441e17fd09c5a/index.js#L53
