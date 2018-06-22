### 1.3 getCookie 获取 cookie 中的值

#### 描述 [description]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 用于获取 cookie 中的值。

#### 用法 [Syntax]

> ```js
> getCookie(name)
> ```

#### 参数 [Parameters]

`name`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; string 类型，需要获取 cookie 的 name

#### 返回值 [return value]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 获取到的 cookie 中的值，若没有则返回 `undefined`。

#### 例子 [examples]

```js
// cookie 里有 uid
bUtils.getCookie('uid'); // '333'

// cookie 里没有 hid
bUtils.getCookie('hid'); // undefined
```

