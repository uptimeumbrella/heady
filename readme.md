# ☔ heady

Get the headers for a url

## Installation

```bash
npm install --save heady
```

## Usage

```javascript
const heady = require('heady')

heady('google.com')
  .then(doStuff)
```

###### Errors

When an error is encountered, the code is set to `500` and an `err` object is added.

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
