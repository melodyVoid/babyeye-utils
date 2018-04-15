import * as date from './date'
import * as array from './array'

const utils = {
  add(...items) {
    return [...items].reduce((prev, curr) => (prev += curr), 0)
  },
  ...date
}

if (!window.bu) {
  window.bu = utils
}

export const parseTime = date.parseTime
export const chunkArray = array.chunkArray
