[![Cn0Xrt.png](https://s1.ax1x.com/2018/04/18/Cn0Xrt.png)](https://imgchr.com/i/Cn0Xrt)

# babyeye-utils

## 文档 [documentation]

<https://melodyvoid.github.io/babyeye-utils>

## 项目描述 [Description]

babyeye-utils 是对业务中常用方法的总结，方便以后在其他项目中使用。主要内容包含：时间类、数组类、DOM类、对象类…内容。

## 安装 [Install]

```powershell
npm install babyeye-utils
# or
yarn add babyeye-utils
```

## 使用 [Usage]

```js
import bUtils from 'babyeye-utils'
// or
const bUtils = reqiure('babyeye-utils').default

bUtils[method](...args)

// eg.
bUtils.parseTime(new Date())
```

# API

## 1. 时间函数

### 1.1 parseTime 格式化时间

#### 描述 [description]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用于将时间对象或者时间戳格式化为指定形式的字符串

#### 用法 [Syntax]

> ```js
> parseTime(time[, format])
> ```

#### 参数 [Parameters]

`time`

&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;需要格式化的时间对象，或者时间戳

`format`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **string** 类型，可选，缺省值为 `'{y}-{m}-{d} {h}:{i}:{s}'`

|  y   |  m   |  d   |  h   |  i   |  s   |  a   |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: |
|  年  |  月  |  日  |  时  |  分  |  秒  | 星期 |

#### 返回值 [return value]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格式化后的日期字符串

#### 例子 [examples]

```js
const date = new Date();
const timeStamp = new Date().getTime();

bUtils.parseTime(date);  // 2018-04-17 11:42:37
bUtils.parseTime(date, '{y}-{m}-{d} {a}'); // 2018-04-17 星期二
bUtils.parseTime(timeStamp, '{h}:{i}:{s}'); // 11:47:10
```

## 2. 数组函数

### 2.1 chunkArray 拆分数组

#### 描述 [description]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 将数组按照指定长度（第二个参数）拆分成若干数组

#### 用法 [Syntax]

> ```js
> chunkArray(arr, size)
> ```

#### 参数 [Parameters]

`arr`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **array** 类型，被拆分的数组

`size`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **number** 类型，表示按照什么长度来拆分数组

#### 返回值 [return value]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 二维数组，每一项是被拆分后的数组

#### 例子 [examples]

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

bUtils.chunkArray(arr, 2) // [[1, 2], [3, 4], [5, 6], [7, 8]]
bUtils.chunkArray(arr, 3) // [[1, 2, 3], [4, 5, 6], [7, 8]]
bUtils.chunkArray(arr, 5) // [[1, 2, 3, 4, 5], [6, 7, 8]]
bUtils.chunkArray(arr, 9) // [1, 2, 3, 4, 5, 6, 7, 8]
```

### 2.2 unique 数组去重

#### 描述 [description]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 将数组中的重复元素去掉

#### 用法 [Syntax]

> ```js
> unique(arr)
> ```

#### 参数 [Parameters]

`arr`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **array** 类型，需要去重的数组

#### 返回值 [return value]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 去重后的数组，不会改变原数组

#### 例子 [examples]

```js
const arr = [1, 2, 3, 3, 2, 4]
const uniqueArr = bUtils.unique(arr)
uniqueArr // [1, 2, 3, 4]
arr // [1, 2, 3, 3, 2, 4]
```

### 2.3 range 生成整数数组

#### 描述 [description]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 用来创建 `start` 到 `stop` （不包括`stop`）整数数组，方便用数组的方法。

#### 用法 [Syntax]

> ```js
> range([start, ]stop[, step])
> ```

#### 参数 [Parameters]

`start`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **number** 类型，起始值，可选，缺省值为 0

`stop`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **number** 类型，结束值，生成的数组中不包含结束值

`step`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **number** 类型，可选，若 `start` < `stop`，默认步长为 1；若 `start` > `stop`，默认步长为 -1

#### 返回值 [return value]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 生成的整数列表数组

#### 例子 [examples]

```js
bUtils.range(5);
// [0, 1, 2, 3, 4]

bUtils.range(1, 5);
// [1, 2, 3, 4]

bUtils.range(0, 20, 5);
// [0, 5, 10, 15]

bUtils.range(0, -5);
// [0, -1, -2, -3, -4]

bUtils.range(0, -5, -1);
// [0, -1, -2, -3, -4]

bUtils.range(0)
// []
```

## 3. 对象函数

### 3.1 cleanObj 清空对象

#### 描述 [description]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 用于清空一个对象，第二个参数是一个数组，里面存放不想被清空的对象的 `key`

#### 用法 [Syntax]

> ```js
> cleanObj(obj[, keep])
> ```

#### 参数 [Parameters]

`obj`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **object** 类型，想要清空的对象

`keep`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **array** 类型，需要被保留的对象的键

#### 返回值 [return value]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 返回被清空或被部分清空的对象

#### 例子 [examples]

```js
const obj = {
  name: 'jack',
  age: 18,
  gender: 'male'
};

bUtils.cleanObj(obj);   // { name: '', age: '', gender: '' }
bUtils.cleanObj(obj, ['name']) // { name: 'jack', age: '', gender: '' }
```

### 3.2 deepClone 深复制

#### 描述 [description]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 用于深复制一个对象

#### 用法 [Syntax]

> ```js
> deepClone(obj)
> ```

#### 参数 [Parameters]

`obj`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 任何类型，想要克隆的对象、数组、函数...

#### 返回值 [return value]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 返回克隆后的对象、数组、函数...

#### 例子 [examples]

```js
const obj = {
  a: 1,
  b: function() {
    return this.a + 1
  },
  c: { x: 2 },
  d: null
}

const arr = [1, { b: 2 }]

const cloneObj = bUtils.deepClone(obj)
const cloneArr = bUtils.deepClone(arr)

cloneObj
/*
{
  a: 1,
  b: function() {
    return this.a + 1
  },
  c: { x: 2 },
  d: null
}
*/
cloneArr
// [1, { b: 2 }]
```

## 4. DOM函数

### 4.1 scrollTo 滚动

#### 描述 [description]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 使 document 滚动到某一元素的位置，可用于滚动到指定锚点、回到顶部等。

#### 用法 [Syntax]

> ```js
> scrollTo(element[, ratio])
> ```

#### 参数 [Parameters]

`element`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **object** 类型，DOM元素，表示 `document` 滚动到该元素的位置

`ratio`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **number** 类型，缓动系数，取值在 0 ~ 1 之间，值越大，滚动速度越快，缺省值为 0.1

#### 返回值 [return value]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 无返回值

#### 例子 [examples]

```html
<button id="btn">滚动到锚点</button>
...
...
<div class="box">
  <div id="anchor"></div>
</div>
```

```js
const oBtn = documemt.getElementById('btn');
const oAnchor = document.getElementById('anchor');

oBtn.addEvementListener('click', () => {
  bUtils.scrollTo(oAnchor);
})
```

## 5. 函数相关

### 5.1 throttle 函数节流

#### 描述 [description]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 预先设定一个执行周期 `wait`，当调用动作的时刻大于等于执行周期则执行该动作，然后进入下一个新周期

#### 用法 [Syntax]

> ```js
> throttle(fn, wait[, options])
> ```

#### 参数 [Parameters]

`fn`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **function** 类型，需要被节流的函数

`wait`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **number** 类型，单位：毫秒，表示节流的周期

`options`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **object** 类型，可选，缺省值为 `{ leading: true, trailing: true }`，`leading` 表示开始的时候是否立即执行；`trailing` 表示在结束的时候是否再调用一下函数

#### 返回值 [return value]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 节流后的函数

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. 该函数有个 `cancle()` 方法，用于取消节流。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. 该函数执行后返回一个  `Promise` ，里面存储着 `fn` 的返回值

#### 注意 [notice]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  `leading：false` 和 `trailing: false` 不能同时设置。

如果同时设置的话，比如当你将鼠标移出的时候，因为 `trailing` 设置为 `false`，停止触发的时候不会设置定时器，所以只要再过了设置的时间，再移入的话，就会立刻执行，就违反了 `leading: false`，bug 就出来了，所以，这个 `options` 只有三种写法：

1. 缺省或 `{ leading: true, trailing: true }` 表示既立即执行，又在周期结束后执行一次函数
2. `{ leading: false }` 或 `{ leading: false, trailing: true }` 表示不立即执行但却在周期结束后执行一次函数
3. `{ trailing: false }` 或 `{ leading: true, trailing: false }` 表示立即执行，在周期结束后不再执行函数

#### 例子 [examples]

```html
<style>
  #box {
    width: 100%;
    height: 200px;
    background: yellowgreen;
    line-height: 200px;
    text-align: center;
  }
</style>
<body>
  <div id="box"></div>
  <button id="btn">停止节流</button>
  <script src="../dist/babyeye-utils.js"></script>
  <script src="index.js"></script>
</body>
```

```js
// index.js
let count = 0;
const oBox = document.getElementById('box');
const oBtn = document.getElementById('btn');

function foo(e) {
  console.log(e)
  console.log(this)
  oBox.innerHTML = count++
  return 'return value'
}

const throttleAction = bUtils.throttle(foo, 3000)
oBox.onmousemove = throttleAction

oBtn.onclick = () => {
  throttleAction.cancel()
}

// throttleAction().then(res => console.log(res))  // 获取函数的返回值
```

### 5.2 debounce 函数防抖

#### 描述 [description]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 当调用动作过 `wait `毫秒后，才会执行该动作，若在这 `wait` 毫秒内又调用此动作则将重新计算执行时间

#### 用法 [Syntax]

> ```js
> debounce(fn, wait[, immediate])
> ```

#### 参数 [Parameters]

`fn`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **function** 类型，需要被防抖的函数

`wait`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **number** 类型，单位：毫秒，表示防抖的等待时间

`immediate`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **boolean** 类型，可选，缺省值为 false，表示是否立即执行，如果为 `true`，`debounce` 会在 `wait` 时间间隔的开始调用这个函数 

#### 返回值 [return value]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 防抖后的函数

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. 该函数有个 `cancle()` 方法，用于取消防抖。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. 该函数执行后返回一个  `Promise` ，里面存储着 `fn` 的返回值

#### 例子 [examples]

```html
<style>
  #box {
    width: 100%;
    height: 200px;
    background: yellowgreen;
    line-height: 200px;
    text-align: center;
  }
</style>
<body>
  <div id="box"></div>
  <button id="btn">停止防抖</button>
  <script src="../dist/babyeye-utils.js"></script>
  <script src="index.js"></script>
</body>
```

```js
// index.js
let count = 0;
const oBox = document.getElementById('box');
const oBtn = document.getElementById('btn');

function foo(e) {
  console.log(e)
  console.log(this)
  oBox.innerHTML = count++
  return 111
}

const debounceAction = bUtils.debounce(foo, 1000, true);
oBox.onmousemove = debounceAction;

// 手动停止防抖
oBtn.onclick = () => {
  debounceAction.cancel()
};

bUtils.debounce(foo, 1000, true)().then(res => console.log(res)); // 获取函数的返回值
```

### 5.3 promisify 函数 Promise 化

#### 描述 [description]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 转换异步函数以返回一个 Promise

#### 用法 [Syntax]

> ```js
> promisify(fn)
> ```

#### 参数 [Parameters]

`fn`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **function** 类型，需要被转换的异步函数

#### 返回值 [return value]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 被转换后的异步函数

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. 该函数执行后返回一个  `Promise` 

#### 例子 [examples]

```js
function delay(time, cb) {
  setTimeout(cb, time)
}
// 转化前调用
delay(3000, () => console.log('3s后执行'))

// Promise 化
const newDelay = bUtils.promisity(delay)

// 转化后调用
newDelay(3000).then(() => console.log('3s后执行'))
```

## 6. URL

### 6.1 getUrlParams 将 url 参数转为对象

#### 描述 [description]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 用于将 url 的参数转为对象的形式

#### 用法 [Syntax]

> ```js
> getUrlParams(url)
> ```

#### 参数 [Parameters]

`url`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; string 类型，需要获取参数对象的 url 

#### 返回值 [return value]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 参数对象

#### 例子 [examples]

```js
const url = 'http://url.com/page?name=Adam&age=18';

bUtils.getUrlParams(url);
// { name: 'Adam', age: 18 }
```
## 7. 字符串函数

### 7.1 fromCamelCase 驼峰转其他形式

#### 描述 [description]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 用于将驼峰形式的字符串转换成其他形式

#### 用法 [Syntax]

> ```js
> fromCamelCase(str[, separator])
> ```

#### 参数 [Parameters]

`str`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; string 类型，需要转换的字符串

`separator`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; string 类型，分隔符，例如 `-`、 `_` 、 ` `(空格)。可选，缺省值为 `-`  

#### 返回值 [return value]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 转换后的字符串

#### 例子 [examples]

```js
const before = 'someCamelCaseName'
const after = bUtils.fromCamelCase(before)
const after2 = bUtils.fromCamelCase(before, ' ')
const after3 = bUtils.fromCamelCase(before, '_')

console.log(after)   // some-camel-case-name
console.log(after2)  // some camel case name
console.log(after3)  // some_camel_case_name
```

### 7.2 toCamelCase 其他形式转驼峰

#### 描述 [description]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 用于将其他形式的字符串（以下划线、连字符和空格作为分隔符）转换成驼峰形式

#### 用法 [Syntax]

> ```js
> toCamelCase(str[, isCapitalize])
> ```

#### 参数 [Parameters]

`str`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; string 类型，需要转换成驼峰的字符串

`isCapitalize`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; boolean 类型，是否转换为大驼峰，可选，缺省值为 `false`，即默认转换成小驼峰的形式

#### 返回值 [return value]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 转换后的字符串

#### 例子 [examples]

```js
const before = 'some words with spaces'
const before2 = 'some_words_with_underscore'
const before3 = 'some-javascript-property'
const before4 = 'some-mixed_string demo'

bUtils.toCamelCase(before) // someWordsWithSpaces
bUtils.toCamelCase(before2, false) // someWordsWithUnderscore
bUtils.toCamelCase(before3) // someJavascriptProperty
bUtils.toCamelCase(before4) // someMixedStringDemo

bUtils.toCamelCase(before, true) // SomeWordsWithSpaces
bUtils.toCamelCase(before2, true) // SomeWordsWithUnderscore
bUtils.toCamelCase(before3, true) // SomeJavascriptProperty
bUtils.toCamelCase(before4, true) // SomeMixedStringDemo
```

