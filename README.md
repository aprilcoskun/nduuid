# nduuid

[![NPM Version][npm-image]][npm-url]

non-dashes UUID

## Usage

Version 1 (timestamp):

```javascript
const uuid = require('nduuid').v1;
uuid(); // ⇨ 'd602d0d20e9011e8ba890ed5f89f718b'

```

Version 4 (random):

```javascript
const uuid = require('nduuid').v4;
uuid(); // ⇨ '8155cc2e6d1448c2bcabdef5c830ddf6'
```

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/nduuid.svg
[npm-url]: https://npmjs.org/package/nduuid