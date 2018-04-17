![Cm2kes.png](https://s1.ax1x.com/2018/04/17/Cm2kes.png)

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

### 1.1 格式化时间

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

### 2.1 拆分数组

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

