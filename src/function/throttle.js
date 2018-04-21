export default function throttle(fn, wait, options = { leading: true, trailing: true }) {
  let timer = null
  let previous = 0
  let result
  const throttled = function(...args) {
    const now = new Date().getTime()
    if (!previous && options.leading === false) previous = now
    const remaining = wait - (now - previous)
    return new Promise(resolve => {
      // 如果没有剩余时间或者修改了系统时间
      if (remaining <= 0 || remaining > wait) {
        if (timer) {
          clearTimeout(timer)
          timer = null
        }
        previous = now
        result = fn.call(this, ...args)
        resolve(result)
      } else if (!timer && options.trailing !== false) {
        timer = setTimeout(() => {
          previous = options.leading === false ? 0 : new Date().getTime()
          timer = null
          result = fn.call(this, ...args)
          resolve(result)
        }, remaining)
      }
    })
  }

  throttled.cancel = function() {
    clearTimeout(timer)
    timer = null
    previous = 0
  }

  return throttled
}
