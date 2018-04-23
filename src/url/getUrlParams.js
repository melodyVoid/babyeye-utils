export default function getUrlParams(url) {
  return url.match(/([^?=&]+)(=([^&]*))/g).reduce((obj, item) => {
    const [key, value] = item.split('=')
    obj[key] = value
    return obj
  }, {})
}
