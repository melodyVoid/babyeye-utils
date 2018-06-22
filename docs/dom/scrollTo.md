### 2.1 scrollTo 滚动

#### 描述 [description]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 使 document 滚动到某一元素的位置，可用于滚动到指定锚点、回到顶部等。

#### 用法 [Syntax]

> ```js
> scrollTo(element[, ratio])
> ```

#### 参数 [Parameters]

`element`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **object** 类型，DOM元素，表示 document 滚动到该元素的位置

`ratio`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **number** 类型，缓动系数，取值在 0 ~ 1 之间，值越大，滚动速度越快，缺省值为 0.1

#### 返回值 [return value]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 无返回值

#### 例子 [examples]

```html
<button id="btn">滚动到锚点</button>
...
...
<div class="box">
  <div id="anchor"></div>
</div>
```

```js
const oBtn = documemt.getElementById('btn');
const oAnchor = document.getElementById('anchor');

oBtn.addEvementListener('click', () => {
  bUtils.scrollTo(oAnchor);
})
```