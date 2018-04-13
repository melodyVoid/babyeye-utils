// 将时间戳或时间对象转为时间对象
function toDate(time) {
  let date
  if (typeof time === 'object' && time !== null) {
    date = time
  } else {
    if (String(time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  return date
}

function parseTime(time, format = '{y}-{m}-{d} {h}:{i}:{s}') {
  if (arguments.length === 0) return null
  const date = toDate(time)
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return timeStr
}

export default parseTime
