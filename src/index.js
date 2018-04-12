const utils = {
  add(...items) {
    return [...items].reduce((prev, curr) => {
      return prev += curr
    }, 0)
  }
}

if (!window.bu) {
  window.bu = utils
}
export default utils