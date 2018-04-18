function scrollTo(element, ratio = 0.1) {
  if (ratio < 0 || ratio > 1) throw new Error('缓动系数应在 0 ~ 1 之间')
  const top = element.offsetTop
  let timer = null
  let scrollTop = document.documentElement.scrollTop
  clearInterval(timer)
  timer = setInterval(() => {
    scrollTop += (top - scrollTop) * ratio
    document.documentElement.scrollTop = scrollTop
    document.body.scrollTop = scrollTop
    if (scrollTop < top ? Math.round(scrollTop) >= top : Math.round(scrollTop) <= top) {
      clearInterval(timer)
      document.documentElement.scrollTop = top
      document.body.scrollTop = top
    }
  }, 10)
}

export default scrollTo
