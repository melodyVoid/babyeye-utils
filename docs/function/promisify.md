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

