### 3.1 cleanObj 清空对象

#### 描述 [description]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 用于清空一个对象，第二个参数是一个数组，里面存放不想被清空的对象的 `key`

#### 用法 [Syntax]

> ```js
> cleanObj(obj[, keep])
> ```

#### 参数 [Parameters]

`obj`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; object 类型，想要清空的对象

`keep`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; array 类型，需要被保留的对象的键

#### 返回值 [return value]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 返回被清空或被部分清空的对象

#### 例子 [examples]

```js
const obj = {
  name: 'jack',
  age: 18,
  gender: 'male'
};

bUtils.cleanObj(obj);   // { name: '', age: '', gender: '' }
bUtils.cleanObj(obj, ['name']) // { name: 'jack', age: '', gender: '' }
```