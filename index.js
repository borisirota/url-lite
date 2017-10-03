var urlParseRE = /^(?:(?:(([^:\/#\?]+:)?(?:(?:\/\/)(?:(?:(?:([^:@\/#\?]+)(?:\:([^:@\/#\?]*))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((?:\/?(?:[^\/\?#]+\/+)*)(?:[^\?#]*)))?(\?[^#]+)?)(#.*)?/

module.exports.parse = function (url) {
  var matches = urlParseRE.exec(url)
  return {
    href: matches[0],
    origin: matches[1],
    protocol: matches[2],
    username: matches[3],
    password: matches[4],
    host: matches[5],
    hostname: matches[6],
    port: matches[7],
    pathname: matches[8],
    search: matches[9],
    hash: matches[10]
  }
}

module.exports.format = function (url) {
  var protocol = url.protocol ? (url.protocol + '//') : ''
  var port = url.port ? (':' + url.port) : ''
  var origin = ''
  if (url.origin) origin = url.origin
  else if (url.host) origin = protocol + url.host
  else if (url.hostname) origin = protocol + url.hostname + port
  var pathname = url.pathname || ''
  var search = url.search || ''
  var hash = url.hash || ''
  return origin + pathname + search + hash
}
