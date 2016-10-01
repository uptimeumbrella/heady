const got = require('got')

module.exports = url => got.head(url)
