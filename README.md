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

## 5. 节流与防抖

### 5.1 debounce 函数防抖

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

