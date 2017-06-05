## 一、说一说你平时写代码遵守的编码规范？
* HTML+CSS
  * class使用中横线"-"当连接符；class避免过度缩写；
  * 空格代替tab；
  * 使用小写书写文档；
  * ……
* CSS
  * 每个选择器声明独占一行；
  * 属性值用双引号包裹；
  * 小数不写0；
  * 值为0时不加单位；
  * 颜色值使用十六进制，缩写；
  * 属性书写顺序按照位置、盒模型、文本相关、视觉顺序书写；
  * ……


## 二、垂直居中有几种实现方式？
* 行内元素[垂直居中代码](http://js.jirengu.com/talacewayo/2/edit)
  * 通过设置容器上下padding相等（容器未设置固定高度，单行或多行）；
  * 通过设置容器line-height与height相等（单行文本）；
  * 通过容器设置display:table，元素设置display:table-cell（单行）；
  * 通过设置伪元素display:inline-block并使其高度为容器高度，再利用vertical-align:middle；使其与同行元素垂直对齐；（单行）
  * 通过flex布局justify-content: center; flex-direction: column;（单行或多行）

![行内元素居中](http://upload-images.jianshu.io/upload_images/5550805-f757f3f0945e9855.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

* block-level垂直居中
  * 设置容器上下padding相等（容器未设置固定高度，代码与行内元素类似）
  * 绝对定位+负margin（元素高度已知）
  * 绝对定位+transform（元素高度已知或未知）
[链接1](http://js.jirengu.com/foxevudapa/2/edit)
  * flex
[链接2](http://js.jirengu.com/morojopimo/2/edit)


![绝对定位+负margin/transform](http://upload-images.jianshu.io/upload_images/5550805-097a0f6221f24eab.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


![flex](http://upload-images.jianshu.io/upload_images/5550805-3699503809775177.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 三、实现如下效果，每种效果都只使用一个html 标签来实现

[链接](http://js.jirengu.com/sinobatipu/2/edit)

![Tooltip](http://upload-images.jianshu.io/upload_images/5550805-f45ae597002417d4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
