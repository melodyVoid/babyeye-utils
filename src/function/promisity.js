export default function promisify(fn) {
  return (...args) =>
    new Promise((resolve, reject) => {
      fn(...args, (err, data) => {
        err ? reject(err) : resolve(data)
      })
    })
}
