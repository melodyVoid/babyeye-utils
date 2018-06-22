### 4.1 throttle 函数节流

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

