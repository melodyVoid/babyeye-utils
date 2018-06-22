// 检测是否是谷歌内核(可排除360及谷歌以外的浏览器)
function isChrome() {
  const ua = navigator.userAgent.toLowerCase()
  return ua.indexOf('chrome') > 1
}

// 测试mime
function _mime(option, value) {
  const mimeTypes = navigator.mimeTypes
  for (const mt in mimeTypes) {
    if (mimeTypes[mt][option] === value) {
      return true
    }
  }
  return false
}

export function is360() {
  // application/vnd.chromium.remoting-viewer 可能为360特有
  const is360Value = _mime('type', 'application/vnd.chromium.remoting-viewer')
  return isChrome() && is360Value
}
