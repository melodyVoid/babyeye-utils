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

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **boolean** 类型，表示是否立即执行，如果为 `true`，`debounce` 会在 `wait` 时间间隔的开始调用这个函数 

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

