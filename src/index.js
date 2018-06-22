import * as bom from './bom'
import * as dom from './dom'
import * as fn from './function'
import * as array from './array'
import * as object from './object'
import * as string from './string'
import * as url from './url'
import * as date from './date'

const utils = {
  add(...items) {
    return [...items].reduce((prev, curr) => (prev += curr), 0)
  },
  ...bom,
  ...dom,
  ...fn,
  ...array,
  ...object,
  ...string,
  ...url,
  ...date
}
export default utils

