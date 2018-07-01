### 7.1 getUrlParams 将 url 参数转为对象

#### 描述 [Description]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 用于将 url 的参数转为对象的形式

#### 用法 [Syntax]

> ```js
> getUrlParams(url)
> ```

#### 参数 [Parameters]

`url`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; string 类型，需要获取参数对象的 url 

#### 返回值 [Return value]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 参数对象

#### 例子 [Examples]

```js
const url = 'http://url.com/page?name=Adam&age=18';

bUtils.getUrlParams(url);
// { name: 'Adam', age: 18 }
```