# 一、class 和 id 的使用场景
* id 属性只能在每个 HTML 文档中出现一次，而class无此限制。所以，html中在定义元素独有的样式时，用id；当样式可以复用时，设置class。

#二、CSS常见选择器
* 基础选择器
  * 通配符选择器（＊）
  * id选择器（\#id）
  * 类选择器（.className）
  * 元素选择器（E）
* 组合选择器
  * E,F：多元素选择器，用`,`分隔，同时匹配元素E或元素F
  * E F：后代选择器，用空格分隔，匹配E元素所有的后代（不只是子元素、子元素向下递归）元素F
  * E>F：子元素选择器，用`>`分隔，匹配E元素的所有直接子元素
  * E+F：直接相邻选择器，匹配E元素之后的相邻的同级元素F
  * E~F：普通相邻选择器（弟弟选择器），匹配E元素之后的同级元素F（无论直接相邻与否）
  * .class1.class2：id和class选择器和选择器连写的时候中间没有分隔符，. 和 # 本身充当分隔符的元素
  * element.class：id和class选择器和选择器连写的时候中间没有分隔符，`. `和` # `本身充当分隔符的元素

* 伪类选择器
  * E:first-child：匹配作为长子（第一个子女）的元素E
  * E:link：匹配所有未被点击的链接
  * E:visited：匹配所有已被点击的链接
  * E:active：匹配鼠标已经其上按下、还没有释放的E元素
  * E:hover：匹配鼠标悬停其上的E元素
  * E:focus：匹配获得当前焦点的E元素
  * E:lang(c)：匹配lang属性等于c的E元素
  * E:enabled：匹配表单中可用的元素
  * E:disabled：匹配表单中禁用的元素
  * E:checked：匹配表单中被选中的radio或checkbox元素
  * E::selection：匹配用户当前选中的元素
  * E:root：匹配文档的根元素，对于HTML文档，就是HTML元素
  * E:nth-child(n)：匹配其父元素的第n个子元素，第一个编号为1
  * E:nth-last-child(n)：匹配其父元素的倒数第n个子元素，第一个编号为1
  * E:nth-of-type(n)：与:nth-child()作用类似，但是仅匹配使用同种标签的元素
  * E:nth-last-of-type(n)：与:nth-last-child() 作用类似，但是仅匹配使用同种标签的元素
  * E:last-child：匹配父元素的最后一个子元素，等同于:nth-last-child(1)
  * E:first-of-type：匹配父元素下使用同种标签的第一个子元素，等同于:nth-of-type(1)
  * E:last-of-type：匹配父元素下使用同种标签的最后一个子元素，等同于:nth-last-of-type(1)

* 属性选择器
  * E[attr]：只使用属性名，但没有确定任何属性值
  * E[attr="value"]：指定属性名，并指定了该属性的属性值
  * E[attr~="value"]：指定属性名，并且具有属性值，此属性值是一个词列表，并且以空格隔开，其中词列表中包含了一个value词，而且等号前面的“〜”不能不写
  * E[attr^="value"]：指定了属性名，并且有属性值，属性值是以value开头的；
  * E[attr$="value"]：指定了属性名，并且有属性值，而且属性值是以value结束的；
  * E[attr*="value"]：指定了属性名，并且有属性值，而且属值中包含了value；
  * E[attr|="value"]：指定了属性名，并且属性值是value或者以“value-”开头的值（比如说zh-cn）;

* 伪元素选择器
  * E::first-line：匹配E元素内容的第一行
  * E::first-letter	：匹配E元素内容的第一个字母
  * E::before：在E元素之前插入生成的内容
  * E::after：在E元素之后插入生成的内容

#三、选择器的优先级是怎样的?对于复杂场景如何计算优先级？
* 选择器优先级
1.在属性后面使用 !important 会覆盖页面内任何位置定义的元素样式
2.作为style属性写在元素标签上的内联样式
3.id选择器
4.类选择器
5.伪类选择器
6.属性选择器
7.标签选择器
8.通配符选择器
9.浏览器自定义

* 复杂场景优先级计算
  * 对于内联样式，取1，0，0，0
  * 对于id选择器，取0，1，0，0
  * 对于class、属性、伪类，取0，0，1，0
  * 对于标签、伪元素，取0，0，0，1
  * 通配符对优先级没有贡献
  * 优先级相同后者覆盖前者

这样可以方便地计算选择器的优先级，如：
div#id:after  /0,1,0,2/
div.class /0,0,1,1/

# 四、a:link, a:hover, a:active, a:visited 的顺序是怎样的？ 为什么？
按照如下顺序，原因不详。。不按照这样的顺序，那么某些样式就会失效
1.a:link    {color:blue;}
2.a:visited {color:blue;}
3.a:hover   {color:red;}
4.a:active  {color:yellow;}

# 五、以下选择器含义？
```
/*id为header元素*/
#header{
}
/*class为header元素*/
.header{
}
/*class为header元素后代中所有class为logo的元素*/
.header .logo{
}
/*class中同时含有header和mobile的元素*/
.header.mobile{
}
/*class为header元素后代中所有class为logo的元素*/
/*class为header元素后代中所有h3标签*/
.header p, .header h3{
}
/*id为header的元素后代所有class为nav元素中的直接子元素li*/
#header .nav>li{
}
/*id为header的元素后代所有a链接鼠标悬停其上时*/
#header a:hover{
}
/*id为header的元素后代所有class为logo的元素之后的所有同级p元素*/
#header .logo~p{
}
/*id为header的元素后代所有带有type="text"属性值的input标签*/
#header input[type="text"]{
}
```

# 六、列出你知道的伪类选择器
见问题二

# 七、div:first-child和div:first-of-type的作用和区别
* div:first-child：如果元素的第一个子元素是div，那么选中这个div
* div:first-of-type：选中元素下出现的第一个div（可能不是第一个子元素）

![div:first-child](http://upload-images.jianshu.io/upload_images/5550805-859b0cd57e4e8a05.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![div:first-of-type](http://upload-images.jianshu.io/upload_images/5550805-15466e54e18bf823.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# 八、运行如下代码，解析下输出样式的原因。
原因：
* `.item1:first-child`：如果元素下第一个子元素带item类，选中这个子元素。所以p.item1为div.ct下符合的子元素。
* `.item1:first-of-type`：选择元素下带有item1类的同种标签的第一个，那么第二个h3是不会应用的样式的。
```
<style>
.item1:first-child{
  color: red;
}
.item1:first-of-type{
  background: blue;
}
</style>
 <div class="ct">
   <p class="item1">aa</p>
   <h3 class="item1">bb</h3>
   <h3 class="item1">ccc</h3>
 </div>
```
![运行输出](http://upload-images.jianshu.io/upload_images/5550805-029bf8323777d1d0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
