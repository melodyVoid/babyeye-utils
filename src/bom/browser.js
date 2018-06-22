export function is360() {
  // 检测是否是谷歌内核(可排除360及谷歌以外的浏览器)
  function isChrome() {
    var ua = navigator.userAgent.toLowerCase();

    return ua.indexOf("chrome") > 1;
  }
  // 测试mime
  function _mime(option, value) {
    var mimeTypes = navigator.mimeTypes;
    for (var mt in mimeTypes) {
      if (mimeTypes[mt][option] == value) {
        return true;
      }
    }
    return false;
  }

  // application/vnd.chromium.remoting-viewer 可能为360特有
  var is360Value = _mime("type", "application/vnd.chromium.remoting-viewer");

  return isChrome() && is360Value;
}
