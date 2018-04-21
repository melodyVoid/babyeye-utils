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

