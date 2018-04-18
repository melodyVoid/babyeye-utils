[![Cn0Xrt.png](https://s1.ax1x.com/2018/04/18/Cn0Xrt.png)](https://imgchr.com/i/Cn0Xrt)

# babyeye-utils

## 项目描述 [Description]

babyeye-utils 是对业务中常用方法的总结，方便以后在其他项目中使用。主要内容包含：时间类、数组类、DOM类、对象类…内容。

## 安装 [Install]

```
npm install babyeye-utils
```

```
yarn add babyeye-utils
```

## 使用 [Usage]

```js
import bUtils from 'babyeye-utils'

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

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可选，字符串类型，缺省为 `'{y}-{m}-{d} {h}:{i}:{s}'`

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

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; array 类型，被拆分的数组

`size`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; number 类型，表示按照什么长度来拆分数组

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

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; object 类型，想要清空的对象

`keep`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; array 类型，需要被保留的对象的键

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

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; object 类型，DOM元素，表示 document 滚动到该元素的位置

`ratio`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; number类型，缓动系数，取值在 0 ~ 1 之间，值越大，滚动速度越快，缺省值为 0.1

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

