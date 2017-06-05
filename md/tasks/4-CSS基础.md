# 一、CSS全称
CSS(Cascading Style Sheets)指层叠样式表，层叠的意思是多个样式可以按照样式规则的优先级形成一个层次结构。CSS实现了内容和样式的分离。
# 二、CSS引入方式? link 和@import 区别?
>[1.Best way to include CSS? Why use @import?](http://stackoverflow.com/questions/10036977/best-way-to-include-css-why-use-import)


##1.CSS引入方式
* 内联样式：即在标签中使用style属性
`<h1 style="color: red; font-size: 20px;"></h1>`
* 内部样式表，html内部使用`style`标签
```
<head>
<style type="text/css">
  body {
    background-color: red
  }
</style>
</head>
```
* 外部样式，通过html中使用`link`标签或在`style`标签中使用`@import`
  * ```<link rel="stylesheet" type="text/css" href="mystyle.css">```

  * ```
<style>
      @import url("hello.css");
      @import "world.css";
</style>
```

##2. link 和@import 区别
* link是html中的标签，可以引入样式表，也可以引入其他文档，而@import是css语法，只能引入样式表
* @import需要在style标签下
* 当使用js控制dom去改变样式的时候，只能使用link标签，因为@import不是dom可以控制的。
* @import中的css文件不同同时下载，link标签引入的css可以
* 每一个@import都会生成一次http请求


# 三、以下这几种文件路径分别用在什么地方，代表什么意思?
* 相对路径
  * `css/a.css`  当前目录下css文件夹中的a.css
  * `./css/a.css`  同`css/a.css`
  * `b.css` 当前目录下的b.css
  * `../imgs/a.png` 当前目录的上一级目录下的imgs文件夹中的a.png
* 绝对路径
  * `/Users/hunger/project/css/a.css`  文件在本地的绝对位置
* 网站路径
  * `/static/css/a.css`  主域名下的static文件夹下的css文件夹下的a.css
  * `css/a.css` 网站上的相对路径。当前页面所在目录下css文件夹中的a.css
  * `http://cdn.jirengu.com/kejian1/8-1.png`  绝对寻址，网站主域名下的kejian1文件夹中的8-1.png

# 四、如何在js.jirengu.com上展示一个图片?
将图片上传至任一网站，得到url后，在jirengu.com的页面中用`<img src=''url' alt="123"/>`使用。在同一网站下可使用相对路径引入。
# 五、html和 css 的书写规范
* 内容缩进
* 建议使用小写
* 不要使用内联样式
* 建议使用h5的声明和utf-8的字符编码
* id和class使用`-`连接多个单词
* 在可以使用缩写的情况下，尽量使用属性缩写。
* 属性有一定的书写顺序，如：
```
1.位置属性(position, top, right, z-index, display, float等)
2.大小(width, height, padding, margin)
3.文字系列(font, line-height, letter-spacing, color- text-align等)
4.背景(background, border等)
5.其他(animation, transition等)
```

# 六、chrome 开发者工具功能区简要介绍
>参考文献
[1.Chrome开发者工具详解](http://www.cnblogs.com/LibraThinker/p/5981346.html)

![chrome开发者工具功能区简介](http://upload-images.jianshu.io/upload_images/5550805-a7a7cee85c6cf3e5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
