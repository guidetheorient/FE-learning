### 1. DOM对象的innerText和innerHTML有什么区别？
* innerHTML属性返回调用元素的所有子节点，包括元素、注释、文本
* innerText属性返回元素包含的所有文本内容，包括子元素的文本
* 在通过innerText和innerHTML写入值时，会删除元素所有子节点，插入文本节点。不过innerText写入的全部为文本，而innerHTML可以是其他内容

```
<div id="div1">
	<p>123</p>
	<span>123</span>
</div>
<div id="div2">
	<p>456</p>	
	<span>456</span>
</div>
<script>
    var a = document.getElementById("div1")
    var b = document.getElementById("div2")
    a.innerText = "<p>这是innerText</p>"
    b.innerHTML = "<p>这是innerHTML</p>"
</script>
```
![innerHTML和innerText在页面中的输出](http://upload-images.jianshu.io/upload_images/5550805-6373f541f4019f4a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```
<div id="div1">
		<p>innerText</p>
		<span>innerText</span>
</div>
<div id="div2">
	<p>innerHTML</p>
	<span>innerHTML</span>
</div>
<script>
    var a = document.getElementById("div1")
    console.log(a)
    console.log(a.innerText)

    var b = document.getElementById("div2")
    console.log(b)
    console.log(b.innerHTML)
</script>
```

![innerText和innerHTML对应的内容](http://upload-images.jianshu.io/upload_images/5550805-00feae18bd9165ff.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 2. elem.children和elem.childNodes的区别？
>参考
[1. JavaScript中Element与Node的区别，children与childNodes的区别](http://www.cnblogs.com/jscode/archive/2012/09/04/2670819.html)

Node(节点)是DOM层次结构中的任何类型的对象的通用名称，Node有很多类型，如元素节点，文本节点，注释节点等，而Element继承Node类，是其中一种，同时扩展了一些属性。
elem.children返回的是Element类，而elem.childNodes返回的是Node类

|节点类型|NodeType|描述|
|:-:|:-:|:-:|
|元素 ELEMENT_NODE| 1|如`<p>`、`<div>`|
|文本 TEXT_NODE| 3 |/|
|注释 COMMENT_NODE| 8 |`<!--123-->`|
|文档 DOCUMENT_NODE| 9 |/|

```
<div id="div1">
	<p>innerText</p>  <!--lala-->
	<span>innerText</span>
</div>
<div id="div2">
	<p>innerHTML</p>  <!--lala-->
	<span>innerHTML</span>
</div>
<script>
	var a = document.getElementById("div1")
	console.log(a.children)  //

	var b = document.getElementById("div2")
	console.log(b.childNodes)  //
</script>
```

![children和childNodes 输出](http://upload-images.jianshu.io/upload_images/5550805-93cad31a9b92d0bb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 3. 查询元素有几种常见的方法？ES5的元素选择方法是什么?
```
//返回id为div1的一个对象
document.getElementById('div1')
//返回的类数组
document.getElementsByTagName('p')
document.getElementsByClassName('attr1 attr2')
document.getElementsByName('name')
//ES5 selectors类似CSS选择器
//返回符合第一个
document.querySelector(selectors)
//返回符合的全部  
document.querySelectorAll(selectors)
```

### 4. 如何创建一个元素？如何给元素设置属性？如何删除属性
```
//生成HTML元素节点
document.createElement('div')
//生成文本节点
document.createTextNode('Hello')
//DocumentFragment对象是一个存在于内存的DOM片段，但是不属于当前文档，常常用来生成较复杂的DOM结构，然后插入当前文档。这样做的好处在于，因为DocumentFragment不属于当前文档，对它的任何改动，都不会引发网页的重新渲染，比直接修改当前文档的DOM有更好的性能表现。
document.createDocumentFragment()

//设置属性
document.setAttribute('name','value')
//删除属性
document.romoveAttribute('name')
```

### 5. 如何给页面元素添加子元素？如何删除页面元素下的子元素?

```
//添加子元素
//appendChild()
var aChild = element.appendChild(aChild);  //语法，element元素末尾添加aChild

var p = document.createElement("p");  //示例，创建p元素
document.body.appendChild(p);         //将p元素添加到body末尾

//insertBefore()
//语法 在parentNode内，将newNode添加到referenceNode前，如果refereNode省略则加在末尾
var insertedNode = parentNode.insertBefore(newNode, referenceNode); 

//删除页面元素下的子元素
parentNode.removeChild(childNode);
```

### 6. element.classList有哪些方法？如何判断一个元素的 class 列表中是包含某个 class？如何添加一个class？如何删除一个class?

```
//add(value):将给定字符串值加入列表，如已存在，就不添加
//添加"current"类
div.classList.add("current");

//remove(value)
//删除"disabled"类
div.classList.remove("disabled");

//contains(value):判断是否存在给定值，存在返回true，否则false
div.classList.contains("bd")

//toggle(value):如果列表中已存在，删掉；不存在，就添加
//切换"user"类
//div.classList.toggle("user");
```

### 7. 如何选中如下代码所有的li元素？ 如何选中btn元素？
```
<div class="mod-tabs">
   <ul>
       <li>list1</li>
       <li>list2</li>
       <li>list3</li>
   </ul>
   <button class="btn">点我</button>
</div>
<script>
//li
	document.getElementsByTagName('li')
    document.querySelectorAll('li')
//.btn
	document.getElementsByClassName('btn')
    document.querySelector('.btn')
</script>
```
