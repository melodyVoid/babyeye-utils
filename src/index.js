import * as date from './date'
import * as array from './array'
import * as dom from './dom'
import * as object from './object'

const utils = {
  add(...items) {
    return [...items].reduce((prev, curr) => (prev += curr), 0)
  },
  ...date,
  ...array,
  ...dom,
  ...object
}

if (!window.bu) {
  window.bu = utils
}

export default utils

// export const parseTime = date.parseTime
// export const chunkArray = array.chunkArray
