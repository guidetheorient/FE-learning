### 1.下面的代码输出多少？修改代码让 fnArr[i]() 输出 i。使用 两种以上的方法
```
var fnArr = [];
for (var i = 0; i < 10; i ++) {
    fnArr[i] =  function(){
	    return i;
    };
}
console.log( fnArr[3]() );  //10

//#1
var fnArr = []
for (var i = 0; i < 10; i ++) {
	(function(){
		var n = i
		fnArr[i] =  function(){
	    	return n
    	}
	})()
}
console.log( fnArr[3]() )  //3

//#2
var fnArr = [];
for (var i = 0; i < 10; i ++) {
    fnArr[i] =  (function(){
	    var n=i
	    return function(){
	    	return n
	    }
    })()
}
console.log( fnArr[3]() );  //3
```

### 2.封装一个汽车对象，可以通过如下方式获取汽车状态
```
var Car = (function(){
	var speed = 0;
	function setSpeed(s){
	   speed = s
	}
	function accelerate(){
		speed = speed+10
	}
	function decelerate(){
		speed = speed-10
	}
	function getSpeed(){
		console.log(speed)
	}
	function getStatus(){
		if(speed){
			console.log('running')
		}else{
			console.log('stop')
		}
	}
	return {
		setSpeed:setSpeed,
		getSpeed:getSpeed,
		accelerate:accelerate,
		decelerate:decelerate,
		getStatus:getStatus
	}
})()
Car.setSpeed(30);
Car.getSpeed(); //30
Car.accelerate();
Car.getSpeed(); //40;
Car.decelerate();
Car.decelerate();
Car.getSpeed(); //20
Car.getStatus(); // 'running';
Car.decelerate(); 
Car.decelerate();
Car.getStatus();  //'stop';
//Car.speed;  //error
```

### 3.下面这段代码输出结果是? 为什么?
```
var a = 1;
setTimeout(function(){
    a = 2;
    console.log(a);
}, 0);
var a ;
console.log(a);
a = 3;
console.log(a);
//1 3 2
//因为setTimeout第二个参数告诉js什么时候将其放入执行队列中，但是如果当前队列中不是空的，setTimeout会被放在队尾执行。
//上述代码除了setTimeout之外的其他代码都先执行，最后再执行setTimeout
```

### 4.下面这段代码输出结果是? 为什么?
```
var flag = true;
setTimeout(function(){
    flag = false;
},0)
while(flag){}
console.log(flag);
//没有输出，setTimeout放在当前队列的队尾，所以flag赋值为true后，执行while，跳不出循环了，setTimeout也执行不了了
```

### 5.下面这段代码输出？如何输出delayer: 0, delayer:1...（使用闭包来实现）
```
for(var i=0;i<5;i++){
	(function(){
		var n = i
		setTimeout(function(){
    	console.log('delayer:' + n );
		}, 0);
	})()
	console.log(i);
}
```

### 6. 如何获取元素的真实宽高
getComputedStyle()返回的样式是一个实时的 CSSStyleDeclaration对象，当元素的样式更改时，它会自动更新本身。
```
<style>
	div{
		height: 100px;
		background-color: red;
	}
</style>
<div>123</div>
<script>
var div = document.querySelector('div')
var a = getComputedStyle(div).height
var b = getComputedStyle(div).width
console.log(a,b)//100px 443px
</script>
```

### 7.URL 如何编码解码？为什么要编码？
>参考
[1.URL编码与解码](http://www.cnblogs.com/greatverve/archive/2011/12/12/URL-Encoding-Decoding.html)
[2.关于URL编码](http://www.ruanyifeng.com/blog/2010/02/url_encoding.html)

```
//解码
decodeURI() 
decodeURIComponent()
//对应编码
encodeURI() //不对ASCII字母or数字or~!@#$&*()=:/,;?+'进行编码
encodeURIComponent()//不对ASCII字母or数字or~!*()'进行编码
```
* 网络标准规定：只有字母和数字[0-9a-zA-Z]、一些特殊符号"$-_.+!*'(),"[不包括双引号]、以及某些保留字，才可以不经过编码直接用于URL。所以对于汉字等字符需要编码
* 对于使用了有特殊含义字符的参数需要进行编码，以免造成歧义。字符（!$&'()*+,;=）用于在每个组件中起到分隔作用的，如=用于表示查询参数中的键值对，&符号用于分隔查询多个键值对。当组件中的普通数据包含这些特殊字符时，需要对其进行编码。

### 8.补全如下函数，判断用户的浏览器类型
```
function isAndroid(){
	return (/android/i.test(navigator.userAgent))
}
function isIphone(){
	return (/iphone/i.test(navigator.userAgent))
}
function isIpad(){
	return (/ipad/i.test(navigator.userAgent))
}
function isIOS(){
	return (/(ipad)|(iphone)/i.test(navigator.userAgent))
}
```

