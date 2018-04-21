export default function debounce(fn, wait, immediate) {
  let timer = null
  let result
  const debounced = function(...args) {
    if (timer) clearTimeout(timer)
    return new Promise(resolve => {
      if (immediate) {
        const callNow = !timer
        timer = setTimeout(() => {
          timer = null
        }, wait)
        if (callNow) {
          result = fn.call(this, ...args)
          resolve(result)
        }
      } else {
        timer = setTimeout(() => {
          result = fn.call(this, ...args)
          resolve(result)
          // fn.bind(this)(...args)
        }, wait)
      }
    })
  }
  // 取消防抖
  debounced.cancel = function() {
    clearTimeout(timer)
    timer = null
  }

  return debounced
}
