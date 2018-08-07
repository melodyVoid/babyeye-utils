### 1.2 isPC 判断是否为PC

#### 描述 [Description]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 用于判断该设备是否为PC

#### 用法 [Syntax]

> ```js
> isPC()
> ```

#### 参数 [Parameters]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **无**

#### 返回值 [Return value]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 布尔值，是 PC 设备为 `true`，否则为 `false`。

#### 例子 [Examples]

```js
// Chrome 
bUtils.isPC()  // true

// Chrome 打开移动设备模拟器
bUtils.isPC()  // false
```

