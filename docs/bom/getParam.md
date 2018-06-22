### 1.4 getParam 获取 url 中的参数值

#### 描述 [description]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 用于获取 url 中的参数的值。

#### 用法 [Syntax]

> ```js
> getParam(url, name)
> ```

#### 参数 [Parameters]

`url`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; string 类型，需要获取参数值的 url 

`name`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; string 类型，需要获取参数值的 name

#### 返回值 [return value]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 获取到的参数值

#### 例子 [examples]

```js
const url = 'http://url.com/page?name=Dylan&age=18';

bUtils.getParam(url, 'name');  // 'Dylan'
bUtils.getParam(url, 'age');   // '18'
bUtils.getParam(url, 'gender');// undefined
```