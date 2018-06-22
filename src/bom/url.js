export let getParam = (url, name) => {
  if (url.indexOf("?") === -1) {
    return null
  }
  let value = null
  url
    .split("?")[1]
    .split("&")
    .forEach(param => {
      if (param.split("=")[0] === name) {
        value = param.split("=")[1]
      }
    })
  return value
}
