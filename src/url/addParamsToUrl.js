export default function addParamsToUrl(baseUrl, params = {}) {
  const paramsUrl = Object.keys(params).reduce((url, key) => {
    const value = params[key] || ''
    return url + `&${key}=${encodeURIComponent(value)}`
  }, '').substring(1)
  baseUrl += (baseUrl.includes('?') ? '&' : '?') + paramsUrl
  return baseUrl
}
