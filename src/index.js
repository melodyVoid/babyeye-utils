import * as date from './date'

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
