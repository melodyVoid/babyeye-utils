### 7.1 fromCamelCase 驼峰转其他形式

#### 描述 [description]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 用于将驼峰形式的字符串转换成其他形式

#### 用法 [Syntax]

> ```js
> fromCamelCase(str[, separator])
> ```

#### 参数 [Parameters]

`str`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; string 类型，需要转换的字符串

`separator`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; string 类型，分隔符，例如 `-`、 `_` 、 ` `(空格)。可选，缺省值为 `-`  

#### 返回值 [return value]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 转换后的字符串

#### 例子 [examples]

```js
const before = 'someCamelCaseName'
const after = bUtils.fromCamelCase(before)
const after2 = bUtils.fromCamelCase(before, ' ')
const after3 = bUtils.fromCamelCase(before, '_')

console.log(after)   // some-camel-case-name
console.log(after2)  // some camel case name
console.log(after3)  // some_camel_case_name
```

