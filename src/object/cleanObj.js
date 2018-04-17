export default function cleanObj(obj, keep = []) {
  Object.keys(obj).forEach(key => {
    if (!keep.includes(key)) obj[key] = ''
  })
  return obj
}
