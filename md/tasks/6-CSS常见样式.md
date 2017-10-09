# 一、块级元素和行内元素分别有哪些？动手测试并列出4条以上的特性区别
>参考文献
1.[MDN Block-level and inline elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements)
2.[行内元素与块级元素的总结](http://www.qdfuns.com/notes/23028/b66cea2cefa3633c96a39094bf0bd21d.html)

* 块级元素：div | h1~h6 | p | hr | form | ul | dl | ol | pre | table | li | dd | dt | tr |  th | blockquote | canvas | fieldset | ……
* 行内元素：em | strong | span | a | br | img | button | input | label | select | textarea | code | script | abbr | cite | ……
* 区别
  * 块级元素从新的一行开始，而行内元素与相邻行内元素在一行上
  * 块级元素宽度默认为父容器宽度，行内元素有内容决定
  * 块级元素可以包含块级元素和行内元素，而行内元素不能包含块级元素
  * 块级元素可以设置宽高以及内外边距，而行内元素只有左右padding、margin生效

![块级元素和行内元素区别](http://upload-images.jianshu.io/upload_images/5550805-342e64d2de2a8594.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# 二、什么是 CSS 继承? 哪些属性能继承，哪些不能？
>参考文献
 [1.css-可继承和不可继承的属性](http://blog.csdn.net/github_34514750/article/details/52554511)
[2.CSS中可以和不可以继承的属性](http://www.cnblogs.com/thislbq/p/5882105.html)（有点错误）
[3.CSS三大特性之继承性](http://blog.csdn.net/k491022087/article/details/52319252)

* CSS继承就是包含在内部的标签将拥有外部标签的样式，即子元素可以继承父元素的属性。
* 可继承
  * visibility | cursor
  * 字体属性：font | -family | -size (相对单位需计算)| -style | -weight |
  * 文本属性：word-spacing | letter-spacing | text-align | text-transform | text-indent | line-height |
  * 颜色属性：color
  * 列表属性：list-style-image | list-style-position | list-style-type | list-style |
  * ……

* 不可继承
  * 文本属性：text-decoration | vertical-align
  * 定位布局属性：display | margin | padding | width | height | float | clear |  position | left | top | overflow | z-index |
  * 边框：border | -width | -style | -color | 
  * 背景：background | -color | -image | -repeat | -position |
  * ……

# 三、如何让块级元素水平居中？如何让行内元素水平居中?
* 块级元素水平居中
```
margin: 0 auto;
```
* 行内元素水平居中 
对其父元素设置`text-align: center`

# 四、用CSS实现小三角形
利用块级元素，使其宽高为0，再分别设置四个border，可组合成各种三角形

![[代码 -- 点我](http://js.jirengu.com/kutusicula/2/edit)](http://upload-images.jianshu.io/upload_images/5550805-06d22e46b8e164c3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# 五、单行文本溢出加 ...如何实现?
通过以下样式，
```
p{
  <!--文本不换行，文本会在在同一行上继续-->
  white-space:nowrap;
 <!--当内容溢出元素框时,内容会被修剪，并且其余内容是不可见的-->
  overflow:hidden;
 <!--当文本溢出包含元素时,显示省略符号来代表被修剪的文本。-->
  text-overflow:ellipsis;
}
```
# 六、px, em, rem 有什么区别？
>参考文献
[1.弄懂css中单位px和em,rem的区别](http://www.cnblogs.com/isItOk/p/5082445.html)

* px：是屏幕中最小的点。像素不是物理长度，在不同分辨率的设备上物理长度不同。
* em：是一个相对长度单位，em会继承父级元素的字体大小。
* rem：这个单位代表相对于根元素的 font-size大小，通过它既可以做到只修改根元素就成比例地调整所有字体大小，又可以避免字体大小逐层复合的连锁反应。目前，除了IE8及更早版本外，所有浏览器均已支持rem。

# 七、解释下面代码的作用?为什么要加引号? 字体里\5b8b\4f53代表什么?
>参考文献
[1.CSS font-family 属性-runoob](http://www.runoob.com/cssref/pr-font-font-family.html)
[2.CSS font 属性](http://www.w3school.com.cn/cssref/pr_font_font.asp)

设置字体大小，行高，字体类型
* `12px/1.5`代表font-size和line-height(font-szie的1.5倍)。
* `arial,'Hiragino Sans GB','\5b8b\4f53',sans-serif`字体系列，从前向后一次匹配
'Hiragino Sans GB'：如果字体名称包含空格，它必须加上引号。
'\5b8b\4f53'：'宋体'的utf-8编码，这样避免浏览器解析css时出现乱码。
```
body{
 font: 12px/1.5 tahoma,arial,'Hiragino Sans GB','\5b8b\4f53',sans-serif;
}
```


***
# 八、实现一下效果
![[代码1 -- 点我](http://js.jirengu.com/cavebamomi/1/edit)](http://upload-images.jianshu.io/upload_images/5550805-c564852f56508cc7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![[代码2 -- 点我](http://js.jirengu.com/jodakezudo/1/edit)](http://upload-images.jianshu.io/upload_images/5550805-c118a0e1607e4c4c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![[代码3 -- 点我](http://js.jirengu.com/yulajeqaso/1/edit)](http://upload-images.jianshu.io/upload_images/5550805-df95bf99d9e2a541.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![[代码4 -- 点我](http://js.jirengu.com/humoxatalu/2/edit)](http://upload-images.jianshu.io/upload_images/5550805-c5427b013270ca2b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


![[代码5 -- 点我](http://js.jirengu.com/zohalexoji/2/edit)](http://upload-images.jianshu.io/upload_images/5550805-2f662ed70f424aae.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
