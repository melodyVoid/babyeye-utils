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

const root = (typeof self === 'object' && self.self === self && self) ||
        (typeof global === 'object' && global.global === global && global) ||
        this || {}
if (!root.bUtils) {
  root.bUtils = utils
}

export default utils

// export const parseTime = date.parseTime
// export const chunkArray = array.chunkArray
