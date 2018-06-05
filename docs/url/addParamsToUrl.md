### 6.2 addParamsToUrl 给 url 拼接参数

#### 描述 [description]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 用于给 url 添加 search 部分

#### 用法 [Syntax]

> ```js
> addParamsToUrl(baseUrl, params)
> ```

#### 参数 [Parameters]

`baseUrl`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; string 类型，需要添加 search 的 url

`params`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; object 类型，表示参数对象，以键值对存放

#### 返回值 [return value]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 拼接后的 url

#### 例子 [examples]

```js
const baseUrl = 'https://www.babyeye.com';

bUtils.addParamsToUrl(baseUrl, {
  username: 'dylan',
  gender: 'male'
});
// https://www.babyeye.com?username=dylan&gender=male

const baseUrl2 = 'https://www.babyeye.com?age=18';
bUtils.addParamsToUrl(baseUrl2, {
  username: 'dylan',
  gender: 'male'
});
// https://www.babyeye.com?age=18&username=dylan&gender=male
```