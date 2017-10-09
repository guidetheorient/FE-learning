>公共参考文献
[1.w3schools.com](https://www.w3schools.com/html/html_xhtml.asp)
[2.前端工程师手册](https://leohxj.gitbooks.io/front-end-database/content/)

#一、HTML、XML、XHTML的区别
## 1.HTML
HTML（Hyper Text Markup Language）表示超文本标记语言（超文本是用超链接的方法，将各种不同空间的信息连接在一起）。HTML允许嵌入图像与对象，并且可以用于创建交互式表单，它利用标签来结构化网页内容，也可在一定程度上描述文档的外观和语义。如图示：

![HTML文档示例](http://upload-images.jianshu.io/upload_images/5550805-c462efc24d8e5b9e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 2.XML
XML（eXtensible Markup Language）表示可扩展标记语言，被设计用来存储和传输数据。XML不仅可用于网页，也可用于众多其他领域。如下图示为我工作中遇过到的XML文件，此处用于存储机器人各轴的极限角度和初始角度。
![XML文档示例](http://upload-images.jianshu.io/upload_images/5550805-e36736ec13616898.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
## 3.XHTML
XHTML（eXtensible HyperText Markup Language）表示可扩展超文本标记语言，与HTML类似，但更加严格更加纯净。XHTML要求文档必须具有良好的结构，比如标签必须闭合、小写，所有的参数值，包括数字，必须用双引号括起来，省略参数也不允许等。

## 4.三者区别
**HTML**语法要求较为松散，不严格，这对于Web未来的发展极为不利。对于机器来说，语言的语法越松散，处理起来就越困难，对于传统的电脑来说，还有能力兼容松散语法，但对于许多其他设备，比如手机，难度就比较大。

**XHTML**就是基于严谨的XML格式，来再设计的HTML。

**XML**和HTML、XML一样都是标记语言，语法严格，标签需要自定义但其并不用于页面展示。

#二、HTML语义化
>HTML语义化就是选择合适的标签、使用合理的代码结构，便于开发者阅读，同时让浏览器的爬虫和机器很好地解析。

通过遵守这样一个规则，使HTML的结构更加清晰，对于程序员读懂代码、团队协作、搜索引擎优化，视力障碍人士使用的读屏器都有着非常积极的作用。
#三、内容与样式分离
>1.写 HTML 的时候先不管样式, 重点放在HTML的结构和语义化上，让 HTML 能体现页面结构或者内容。之后再去写样式。
2.HTML 内不允许出现属性样式，尽量不要出现行内样式。

在CSS出现前，网页的内容和样式都由HTML定义，这样不仅导致了HTML结构复杂，样式属性众多，很多标签没有任何语义，只是表示特殊的样式。这样的杂糅是非常不利于HTML文档的阅读和修改。
>在新式的页面中HTML只表示结构和内容，样式部分交给CSS控制，做到了内容和表现分离，方便维护。

#四、常见的meta标签
>参考文献
[1.常用meta整理](https://segmentfault.com/a/1190000002407912)
[2.关于<meta name="keywords" content=" ">](http://blog.csdn.net/maoxunxing/article/details/40835213)
[3.移动前端开发之viewport的深入理解](http://www.cnblogs.com/2050/p/3877280.html)
[4.MDN <meta>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta)

## 1.meta标签介绍
><meta> 元素可提供有关页面的元信息（meta-information），比如针对搜索引擎和更新频度的描述和关键词。<meta> 标签永远位于 head 元素内部。元数据不会显示在页面上，但是对于机器是可读的。

1.`content`：定义与`http-equiv`或`name`属性相关的元信息。
2.`http-equiv`：这个枚举属性定义了能改变服务器和用户引擎行为的编译。这个编译值使用content 来定义。
3.`name`：把 content 属性关联到一个名称，名称通常可以自由定义，同时也出现了很多为大家熟知通用的名称，如keywords、author、viewport等。

## 2.常用语句
###1.charset属性
声明当前文档所使用的字符编码，文档保存时的字符编码要与之一致，否则可能导致页面乱码。
`<meta charset = 'utf-8' />`


###2.不同的http-equiv属性
* 这个声明允许开发者选定特定的IE版本来模拟解析网页以此解决网页的兼容性问题。`X-UA-Compatible`是从IE8起新增的专用标记，到IE11时被弃用，此处的"IE=edge"即为使用最新的引擎渲染网页。加入`chrome=1`是可以在IE6~9的用户安装了Google Chrome Frame时使用它来渲染页面，不过在2014年便被弃用。
在使用时要保证这句话至于head除title和其他meta元素以外元素的前面，否则不起作用。
`<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />`

*  禁止浏览器从本地计算机的缓存中访问页面内容。这样设定，访问者将无法脱机浏览
`<meta http-equiv="Pragma" content="no-cache">`

* 定时让网页在指定的时间n内，跳转到你的页面
 `<meta http-equiv="Refresh" content="n;url=http://yourlink">`


###3.不同的name属性
* 用于移动设备展示
  * width=device-width：viewport的宽度等于设备的宽度；
  * initial-scale=1.0：页面的初始缩放值；
  * maximum-scale=1.0：允许用户的最大缩放值；
  * user-scalable=0：是否允许用户进行缩放。

` <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />`

 * robots用来告诉搜索机器人哪些页面需要索引，哪些页面不需要索引。content用逗号分隔。content的参数有all、none、index、noindex、follow、nofollow。默认是all。
  
`<meta name="robots" content="index,follow" />`

* keywords为搜索引擎提供的关键字列表，用逗号分隔字符串。

`<meta name="keywords" content="science, education,culture" />`

* description用来告诉搜索引擎你的网站主要内容。

`<meta name="description" content="150 words" />`

#五、文档声明的作用/严格模式和混杂模式指什么/<!doctype html> 的作用
>参考文献
[1.HTML head 头标签](http://fex.baidu.com/blog/2014/10/html-head-tags/?qq-pf-to=pcqq.c2c)
[2.HTML <!DOCTYPE> 标签 - w3cschool](http://www.w3school.com.cn/tags/tag_doctype.asp)

>DOCTYPE(Document Type)，该声明位于文档中最前面的位置，处于 html 标签之前，此标签告知浏览器文档使用哪种 HTML 或者 XHTML 规范。


## 1.常用声明 
 HTML5：简洁，向前向后兼容，推荐使用。
 `<!doctype html>`

HTML 4.01 strict：该 DTD 包含所有 HTML 元素和属性，但不包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。
`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">`

HTML 4.01 Transitional：该 DTD 包含所有 HTML 元素和属性，包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。
`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">`

HTML 4.01 Frameset：该 DTD 等同于 HTML 4.01 Transitional，但允许框架集内容。
`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">`

#六、浏览器乱码的原因及解决方法
>参考文献
[1.聊一聊编码与乱码](https://zhuanlan.zhihu.com/p/24465635?refer=study-fe)
[2.HTML5 UTF-8 中文乱码](http://www.cnblogs.com/csn0721/archive/2013/01/24/2875613.html)

## 1.原因
html文档声明的字符编码，如`<meta charset = 'utf-8' />`与文档保存时使用的字符编码不一致，这样浏览器打开页面时使用文档声明的`utf-8`解码会出现乱码。或者文档没有声明字符编码，浏览器使用默认编码来解码也可能不匹配。乱码一般出现在英文以外的字符。
## 2.解决方法
html文档中声明字符编码，并在保存时选择相应的字符编码。

#七、常见浏览器及其内核
>参考文献
[1.List of web browsers - wikipedia](https://en.wikipedia.org/wiki/List_of_web_browsers)
[2.浏览器内核 - Leo_wlCnBlogs](http://www.cnblogs.com/Leo_wl/p/5119719.html)
[3.各主流浏览器内核介绍 - VaJoy](http://www.cnblogs.com/vajoy/p/3735553.html)

|浏览器|内核|
|:-:|:-:|
|Chrome|Blink(fork of Webkit)|
|Internet Explorer|Trident|
|Firefox|Gecko|
|Microsoft Edge|EdgeHTML|
|Safari|Webkit|
|Opera|Blink|
|搜狗/QQ/360极速&安全|Blink和Trident/EdgeHTML|
注：以上皆为最新版本采用内核

#八、常见标签及应用场景
|        标签     |  应用场景    |
|  :------------:  |  :-----:|
|h1 ~ h6 |标题|
|p|段落|
|a|行内元素、链接|
|img|图片|
|div|块，通常用于布局|
|ul li|用于无序列表、ul直接子元素是li、可嵌套|
|ol li|用于有序列表、ul直接子元素是li、可嵌套|
|table|表格|
|tr |表格行|
|th|表头元素|
|td|表格单元元素|
|dl dt dd|dl表示定义列表，dt为列表中的项目，dd为dt的描述|
|button |按钮|
|strong |着重强调文本|
|em|加强语气，感情|
|span|行内元素，用来格式化样式|
|iframe|创建包含另一个文档的内联框架|
|form|用于创建HTML表单，包含input、label、textarea等元素|
|input   |   用于搜集用户输入的信息，如创建button、checkbox、file、<br />hidden、password、radio等|
