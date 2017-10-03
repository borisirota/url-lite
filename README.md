# url-lite

Lightweight node url regex based drop in replacement for browsers

Inspired by [Getting parts of a URL (Regex)](https://stackoverflow.com/a/24527267)

# install

```sh
npm install url-lite --save
```

# usage

```js
var url = require('url-lite')

var result = url.parse('https://example.com/path?param=value#hash')
console.log(result)
/*
{
  href: 'https://example.com/path?param=value#hash',
  origin: 'https://example.com,
  protocol: 'https:',
  username: undefined,
  password: undefined,
  host: 'example.com',
  hostname: 'example.com',
  port: undefined,
  pathname: '/path',
  search: '?param=value',
  hash: '#hash'
}
*/

var result2 = url.format(result)
console.log(result2)
// 'https://example.com/path?param=value#hash'
```

# license

MIT