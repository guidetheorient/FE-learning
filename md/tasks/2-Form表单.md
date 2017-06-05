# 一.form表单的作用？常用input 标签及其作用？
>参考文献
[1.w3cscool.com](http://www.w3school.com.cn/html/)
[2.MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)


###1.form表单的作用
form表单是用户和网站之间重要的交互方式。用户通过form表单向网站提交数据。form表单可以包含多种元素，如单选框，复选框，文本域，提交按钮，下拉列表，上传域等。
###2.常用的input标签及其作用
|input type|名称及作用|
|:-:|:-:|
|radio|单选框|
|checkbox|复选框|
|text|文本域，输入单行文本|
|button|按钮，无默认行为|
|password|密码域，输入内容会以特殊字符显示，如"●"|
|file|用于文件上传|
|submit|提交按钮，提交表单的数据至form action属性制定的页面|
|image|图片按钮|
|hidden|用户不可见，但内容会上传，可用于安全验证|
|reset|重置按钮，重置表单到初始状态|

#二、get和post方式的区别?
>参考文献
[1.w3schools.com](https://www.w3schools.com/tags/ref_httpmethods.asp)

|get|post|
|:-:|:-:|
|数据显示在url中，所以可以被收藏<br />为书签，也被记录在浏览历史中|数据不会显示在url中|
|数据长度限制|没有限制|
|数据类型只能为ASCII|没有限制|
|可以被缓存|不会被缓存|
|多用于提交数据|多用于请求数据|

#三、input中name属性作用？
* name属性作为向服务器提交数据的标识，没有name属性，数据不会提交；
* name属性用来给radio、checkbox分组，name相同的为一组；
* name可以在css、js中充当选择器。

#四、radio如何分组?
通过name属性实现分组，name属性相同的为一组。
```
	  <input type="checkbox" name="hobby" value="dota" />dota
	  <input type="checkbox" name="hobby" value="traveling" />旅游
	  <input type="checkbox" name="hobby" value="keep_pets"/>宠物
```
![name属性相同为一组](http://upload-images.jianshu.io/upload_images/5550805-b21fc8fb528120df.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#五、placeholder属性作用?
h5中新属性，占位符，显示提示信息。元素输入为空时显示，反之显示。（适用于以下的 <input> 类型：text, search, url, telephone, email 以及 password。）

#六、type=hidden隐藏域有什么作用? 举例说明
>参考文献
[1.Original purpose of <input type=“hidden”>? ](http://stackoverflow.com/questions/16293741/original-purpose-of-input-type-hidden)
[2.CSRF 是什么？](https://zhuanlan.zhihu.com/p/22521378?refer=study-fe)
[3.html 中表单元素input type="hidden"的作用](http://blog.csdn.net/kuangruike/article/details/52127450)

隐藏域对用户不可见，但可以随表单提交数据至服务器。

举例：
1.用于防止CSRF（Cross-site request forgery 跨域请求伪造）攻击，通过后台生成随机的token在隐藏域中，在用户提交时验证合法性。
2.在多页表单中记录用户状态。

#七、html表单用法

![html表单用法](http://upload-images.jianshu.io/upload_images/5550805-ed6a8ec1aef3b666.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
