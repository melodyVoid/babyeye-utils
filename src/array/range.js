export default function range(start = 0, stop = start, step) {
  if (stop === start) start = 0
  if (!step) step = start < stop ? 1 : -1
  const length = Math.max(Math.ceil((stop - start) / step), 0)
  const range = Array(length)

  for (let i = 0; i < length; i++, start += step) {
    range[i] = start
  }
  return range
}
