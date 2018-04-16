import * as date from './date'
import * as array from './array'
import * as dom from './dom'

const utils = {
  add(...items) {
    return [...items].reduce((prev, curr) => (prev += curr), 0)
  },
  ...date,
  ...array,
  ...dom
}

if (!window.bu) {
  window.bu = utils
}

export default utils

// export const parseTime = date.parseTime
// export const chunkArray = array.chunkArray
