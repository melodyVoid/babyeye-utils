export default function getUrlParams(url) {
  const paramsArr = url.match(/([^?=&]+)(=([^&]*))/g)
  return paramsArr
    ? paramsArr.reduce((obj, item) => {
      const [key, value] = item.split('=')
      obj[key] = value
      return obj
    }, {})
    : null
}
