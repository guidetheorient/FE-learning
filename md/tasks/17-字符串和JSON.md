### 1. 使用数组拼接出如下字符串
```
var prod = {
	name: '女装',
	styles: ['短款', '冬季', '春装']
};
function getTpl(data){
	var a = [];
	var b = prod;
	var c = data.styles;
	a.push('<dl class="product">');
	a.push('<dt>'+b.name+'</dt>');
	for (key in c){
		a.push('<dd>'+c[key]+'</dd>');
	}
	a.push('</dl>')
	console.log(a.join("")) 
};
var result = getTpl(prod);  //result为下面的字符串
/*
<dl class="product">
    <dt>女装</dt>
    <dd>短款</dd>
    <dd>冬季</dd>
    <dd>春装</dd>
</dl>
*/
```

### 2. 写出两种以上在js代码中书写多行字符串的方法
```
var longString = 'long'+
'long'+
'long';

var longString2 = 'long2\
long2\
long2' //反斜杠后不能有空格
```



### 3. 补全如下代码,让输出结果为字符串: hello\\饥人谷
```
var str = 'hello\\\\饥人谷'
console.log(str)  //hello\\饥人谷
``` 


### 4. 以下代码输出什么?为什么
```
var str = 'jirengu\nruoyu'
console.log(str.length)  //13   \n是转义字符，算一个，就算`\`后面跟非特殊意义字符，也算一个，此时不转义
```


### 5.写一个函数，判断一个字符串是回文字符串，如 abcdcba是回文字符串, abcdcbb不是
```
function reverseEqualToOrigin(text){
	if(text === text.split('').reverse().join('')){
		return true
	} else{
		return false
	}
}
console.log(reverseEqualToOrigin('abcdcba'))  //true
console.log(reverseEqualToOrigin('ab')) //false
```


### 6.写一个函数，统计字符串里出现出现频率最多的字符
```
function mostAvailable(text){
	var i;
	var obj = {};
	var textSplit = text.split('')
	for(i = 0; i<text.length; i++){
		if(textSplit[i] in obj){
			obj[textSplit[i]]+=1;
		} else{
			obj[textSplit[i]]=1;
		}
	}
	var count = 0;
	var max;
	for(key in obj){
		if(obj[key] > count){
			max = key
			count = obj[key]
		} 
	}
	console.log(max+':'+obj[max])
}
mostAvailable('hqhqhhqhqh  abck') //h:6
```

### 7. 写一个camelize函数，把my-short-string形式的字符串转化成myShortString形式的字符串，如  
```
function camelize(text){
	textSplit = text.split('-')
	var i ='';
	var textJoin = textSplit[0];
	for(i = 1;i < textSplit.length;i++){
		textPart = textSplit[i]
		textJoin += textPart[0].toUpperCase() + textPart.slice(1);
	}
	return textJoin;
}
console.log(camelize("background-color") == 'backgroundColor') //true
console.log(camelize("list-style-image") == 'listStyleImage')  //true
```

### 8.写一个 ucFirst函数，返回第一个字母为大写的字符 （***）
```
function ucFirst(text){
	return text[0].toUpperCase() + text.slice(1).toLowerCase();
}
console.log(ucFirst("hunger")) //Hunger
```


### 9. 写一个函数truncate(str, maxlength), 如果str的长度大于maxlength，会把str截断到maxlength长，并加上...，如
```
function truncate(text,maxlength){
	if(text.length <= maxlength){
		return text;
	} else {
		return (text.substr(0,maxlength))+'...'
	}
}
console.log(truncate("hello, this is hunger valley,", 10) === "hello, thi...") //true
console.log(truncate("hello world", 20) === "hello world") //true
```


### 10.什么是 json？什么是 json 语言？JSON 语言如何表示对象？window.JSON 是什么？
**10.1** JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。它基于JavaScript（Standard ECMA-262 3rd Edition - December 1999）的一个子集。 JSON采用完全独立于语言的文本格式，但是也使用了类似于C语言家族的习惯（包括C, C++, C#, Java, JavaScript, Perl, Python等）。这些特性使JSON成为理想的数据交换语言。 易于人阅读和编写，同时也易于机器解析和生成(网络传输速度)。

**10.2** 
* JSON可以表示一下三种类型的值
  * 简单值：字符串、数值、布尔值、null（只有这四种，不能为NaN、undefined、Infinity等）
  * 复杂数据类型
    * 对象：表示一组无序的键值对。而每个键值对中的值可以是简单值，也可以是复杂数据类型的值。
    * 数组：表示一组值的有序列表，可以通过数值索引来访问其中的值。数组的值也可以是任意类型——简单值、对象或数组。（复杂类型不能为函数、正则、日期对象等）
* 其他
  * 字符串必须使用双引号表示，不能使用单引号
  * 对象的键名必须放在双引号里面
  * 数组或对象最后一个成员的后面，不能加逗号

**10.3** window.JSON是ES5新增的对象，用来处理JSON格式数据。它有两个方法：JSON.stringify()和JSON.parse()。

### 11、如何把JSON 格式的字符串转换为 JS 对象？如何把 JS对象转换为 JSON 格式的字符串?
>参考：
[1.JavaScript 标准参考教程（alpha）](http://javascript.ruanyifeng.com/stdlib/json.html#toc0)

* JSON.parse方法用于将JSON字符串转化成对象。
```
JSON.parse('{}');              // {}
JSON.parse('true');            // true
JSON.parse('"foo"');           // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse('null');            // null
```
* JSON.stringify方法用于将一个值转为JSON字符串。该字符串符合 JSON 格式，并且可以被JSON.parse方法还原。
```
JSON.stringify('1') // ""1""
JSON.stringify(1) // "1"
JSON.stringify(false) // "false"
JSON.stringify([]) // "[]"
JSON.stringify({}) // "{}" 
——————————————————————————
JSON.stringify([1, "false", false]) // '[1,"false",false]'
JSON.stringify({ name: "xiaoming" })// '{"name":"xiaoming"}'
```
