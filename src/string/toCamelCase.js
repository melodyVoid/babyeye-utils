export default function toCamelCase(str, isCapitalize) {
  return str.replace(/(^[a-zA-Z])|[\s-_]+(\w)/g, (match, p1, p2) => {
    return p2 ? p2.toUpperCase() : isCapitalize ? p1.toUpperCase() : p1.toLowerCase()
  })
}
