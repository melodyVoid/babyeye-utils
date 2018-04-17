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

## API

### 1. 时间函数

#### 1.1 格式化时间

##### 用法 [Syntax]

> ```js
> parseTime(time[, format])
> ```

##### 参数 [Parameters]

`time`

    需要格式化的时间对象，或者时间戳

`format`

    可选，字符串类型，缺省为 `'{y}-{m}-{d} {h}:{i}:{s}'`

|  y   |  m   |  d   |  h   |  i   |  s   |  a   |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: |
|  年  |  月  |  日  |  时  |  分  |  秒  | 星期 |

##### 返回值 [return value]

    格式化后的日期字符串

##### 例子 [examples]

```js
const date = new Date();
const timeStamp = new Date().getTime();
bUtils.parseTime(date);  // 2018-04-17 11:42:37
bUtils.parseTime(date, '{y}-{m}-{d} {a}'); // 2018-04-17 星期二
bUtils.parseTime(timeStamp, '{h}:{i}:{s}'); // 11:47:10
```

