import bUtils from '../src/index'
// const bUtils = require('../dist/babyeye-utils').default

console.log(bUtils)

// const oDiv = document.createElement('div')

// oDiv.style.height = '200px'
// oDiv.style.width = '200px'
// oDiv.style.position = 'absolute'
// oDiv.style.top = '1000px'
// oDiv.style.background = 'red'
// document.body.appendChild(oDiv)
// document.body.style.height = '2000px'
// console.dir(oDiv)

// document.onclick = () => {
//   bUtils.scrollTo(oDiv, 8)
// }

// const obj = {
//   name: 'jack',
//   age: 18,
//   gender: 'male'
// }

// console.log(bUtils.cleanObj(obj, ['name']))

// const arr = [1, 2, 3, 4, 5, 6, 7]
// console.log(bUtils.chunkArray(arr, 9))

// const obj = {
//   a: 1,
//   b: function() {
//     return this.a + 1
//   },
//   c: { x: 2 },
//   d: null
// }

// const arr = [1, { b: 2 }]

// const cloneObj = bUtils.deepClone(obj)
// const cloneArr = bUtils.deepClone(arr)

// console.log(cloneObj)
// console.log(cloneArr)

const arr = [1, 2, 3, 3, 2, 4]
const uniqueArr = bUtils.unique(arr)
console.log(uniqueArr)
console.log(arr)
