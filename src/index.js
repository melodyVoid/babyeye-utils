import * as date from './date'
import * as array from './array'
import * as dom from './dom'
import * as object from './object'
import * as fn from './function'
import * as url from './url'
import * as string from './string'

const utils = {
  add(...items) {
    return [...items].reduce((prev, curr) => (prev += curr), 0)
  },
  ...date,
  ...array,
  ...dom,
  ...object,
  ...fn,
  ...url,
  ...string
}
export default utils

