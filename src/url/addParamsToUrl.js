export default function addParamsToUrl(baseUrl, params = {}) {
  const paramsUrl = Object.keys(params).reduce((url, key) => {
    // eslint-disable-next-line
    const value = params[key] == undefined ? '' : params[key]
    return url + `&${key}=${encodeURIComponent(value)}`
  }, '').substring(1)
  baseUrl += (baseUrl.includes('?') ? '&' : '?') + paramsUrl
  return baseUrl
}
