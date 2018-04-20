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