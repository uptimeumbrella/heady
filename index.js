const got = require('got')

module.exports = url => {
  const start = process.hrtime()

  return got.head(url).then(res => receive(res, start))
}

const receive = (res, start) => {
  const diff = process.hrtime(start)
  const total = diff[0] * 1e3 + diff[1] * 1e-6

  return {
    code: res.statusCode,
    time: total,
    headers: res.headers
  }
}

// Response time algorithm from Doug Wilson in response-time
//   => https://github.com/expressjs/response-time/blob/1e8b4be1378ec4bc6371f0f8c16441e17fd09c5a/index.js#L53
