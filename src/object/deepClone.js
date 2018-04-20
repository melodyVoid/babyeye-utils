export default function deepClone(obj) {
  if (Array.isArray(obj)) {
    return obj.map(deepClone)
  } else if (obj && typeof obj === 'object') {
    const newObj = {}
    for (const key of Object.keys(obj)) {
      newObj[key] = deepClone(obj[key])
    }
    return newObj
  } else {
    return obj
  }
}
