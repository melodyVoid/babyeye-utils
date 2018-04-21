### 2.3 range 生成整数数组

#### 描述 [description]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 用来创建 `start` 到 `stop` （不包括`stop`）整数数组，方便用数组的方法。

#### 用法 [Syntax]

> ```js
> range([start, ]stop[, step])
> ```

#### 参数 [Parameters]

`start`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; number 类型，起始值，可选，缺省值为 0

`stop`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; number 类型，结束值，生成的数组中不包含结束值

`step`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; number 类型，可选，若 start < stop，默认步长为 1；若 start > stop，默认步长为 -1

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