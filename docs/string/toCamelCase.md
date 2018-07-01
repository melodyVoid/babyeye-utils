### 6.2 toCamelCase 其他形式转驼峰

#### 描述 [Description]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 用于将其他形式的字符串（以下划线、连字符和空格作为分隔符）转换成驼峰形式

#### 用法 [Syntax]

> ```js
> toCamelCase(str[, isCapitalize])
> ```

#### 参数 [Parameters]

`str`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; string 类型，需要转换成驼峰的字符串

`isCapitalize`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; boolean 类型，是否转换为大驼峰，可选，缺省值为 `false`，即默认转换成小驼峰的形式

#### 返回值 [Return value]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 转换后的字符串

#### 例子 [Examples]

```js
const before = 'some words with spaces'
const before2 = 'some_words_with_underscore'
const before3 = 'some-javascript-property'
const before4 = 'some-mixed_string demo'

bUtils.toCamelCase(before) // someWordsWithSpaces
bUtils.toCamelCase(before2, false) // someWordsWithUnderscore
bUtils.toCamelCase(before3) // someJavascriptProperty
bUtils.toCamelCase(before4) // someMixedStringDemo

bUtils.toCamelCase(before, true) // SomeWordsWithSpaces
bUtils.toCamelCase(before2, true) // SomeWordsWithUnderscore
bUtils.toCamelCase(before3, true) // SomeJavascriptProperty
bUtils.toCamelCase(before4, true) // SomeMixedStringDemo
```

