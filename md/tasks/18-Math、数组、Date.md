## 一、Math
###1. 写一个函数，返回从min到max之间的 随机整数，包括min不包括max 

```
function intNum(min,max){
	return Math.floor(Math.random()*(max-min)+min)
}
```

###2. 写一个函数，返回从min都max之间的 随机整数，包括min包括max 

```
function intNum(min,max){
	return Math.floor(Math.random()*(max-min+1)+min)
}
```

###3. 写一个函数，生成一个长度为 n 的随机字符串，字符串字符的取值范围包括0到9，a到 z，A到Z
```
function genAStr(length){
	var i,str=''
	for(i=0;i<length;i++){
		str += dict[Math.floor(Math.random()*dict.length)]
	}
	return str
}
```

###4. 写一个函数，生成一个随机 IP 地址，一个合法的 IP 地址为 0.0.0.0~255.255.255.255

```
function getRandIP(){
  var str=[]
  for(var i=0;i<4;i++){
  	str[i]=Math.floor(Math.random()*256)
  }
  return str.join(',')
}
var ip = getRandIP()
console.log(ip)
```

### 5. 写一个函数，生成一个随机颜色字符串，合法的颜色为#000000~ #ffffff

```
dict ='abcdef0123456789'
function getRandColor(){
	var c='#'
	for(var i=0;i<6;i++){
		c+=dict[Math.floor(Math.random()*dict.length)]
	}
	return c
}
var color = getRandColor()
console.log(color)   // #3e2f1b
```

## 二、数组

### 1. 数组方法里push、pop、shift、unshift、join、splice分别是什么作用？用 splice函数分别实现push、pop、shift、unshift方法

```
//push()接收任意数量的参数，将它们逐个添加到数组末尾,并返回修改后数组的长度
var a = [1,2]
a.push(3,4)
console.log(a)  //[1,2,3,4]
//pop()移除数组最后一项，减少数组的length值，并返回移除的项
var b = [1,2]
b.pop()
console.log(b)  //[1]
console.log(b.length) //1
//shift()移除数组的第一项并返回该项，同时数组长度减1
var c = [1,2]
c.shift()
console.log(c) //[2]
console.log(c.length) //1
//unshift()接收任意数量参数，添加到数组开头，并返回新数组长度
var d = [1,2]
d.unshift(3,4)
console.log(d) //[3,4,1,2]
//join() 方法用于把数组中的所有元素放入一个字符串,元素通过指定的分隔符分隔
var e = [1,2,'a']
console.log(e.join('')) //'12a'
//splice(index,howmany,item1,.....,itemX)用来对数组进行多种操作，index规定添加/删除的位置，为负数则在结尾添加;howmany规定要删除的数量，为0则不删除;item1~itemX为添加项，为可选项;
console.log('-----------------')
//实现push()
var f1 = [1,2]
f1.splice(f1.length,0,3,4) 
console.log(f1) //[1,2,3,4]
//实现pop()
var f1 = [1,2]
f1.splice(-1,1)
console.log(f1) //[1]
//实现shift()
var f1 = [1,2]
f1.splice(0,1)
console.log(f1) //[2]
//实现unshift()
var f1 = [1,2]
f1.splice(0,0,3)
console.log(f1) //[3,1,2]
```

### 2. 写一个函数，操作数组，数组中的每一项变为原来的平方，在原数组上操作 

```
function squareArr(arr){
	for(var i=0;i<arr.length;i++){
		arr[i]*=arr[i]
	}
}
var arr = [2, 4, 6]
squareArr(arr)
console.log(arr) // [4, 16, 36]
```

### 3. 写一个函数，操作数组，返回一个新数组，新数组中只包含正数，原数组不变
```
function filterPositive(arr){
	var newArr=[]
	for(var i=0;i<arr.length;i++){
		if((/^\d*$/).test(arr[i])){
			newArr.push(arr[i])
		}
	}
	return newArr
}
var arr = [3, -1,  2,  '饥人谷', true]
var newArr = filterPositive(arr)
console.log(newArr) //[3, 2]
console.log(arr) //[3, -1,  2,  '饥人谷', true]
```

## 三、Date
### 1. 写一个函数getChIntv，获取从当前时间到指定日期的间隔时间
```
var str = getChIntv("2017-05-30");
console.log(str);  // "现在离2017-05-30已经过了0天7小时51分17秒"
var str1 = getChIntv("2017-05-31");
console.log(str1); //"现在就是2017-05-31"
var str2 = getChIntv("2017-06-01");
console.log(str2); //"距2017-06-01还有0天16小时8分34秒"

function getChIntv(str){
	if(/^\d{4}-[01]\d{1}-([012]\d{1}|3[01])$/.test(str)){
		var now = Date.now()
		var fixedDate = Date.parse(str)-8*60*60*1000
		var interval = fixedDate - now
		var day = parseInt(interval/(60*60*24*1000))
		var hour = parseInt(interval%(60*60*24*1000)/(60*60*1000))
		var min = parseInt(interval%(60*60*24*1000)%(60*60*1000)/(60*1000))
		var sec = parseInt(interval%(60*60*24*1000)%(60*60*1000)%(60*1000)/1000)
		if(interval>-86400000&&interval<0){
			return '现在就是'+str
		}else if(interval<-86400000){
			return '现在离'+str+'已经过了'+(-day-1)+'天'+(-hour)+'小时'+(-min)+'分'+(-sec)+'秒'
		}else{
			return '距'+str+'还有'+day+'天'+hour+'小时'+min+'分'+sec+'秒'
		}	
	}
}
```

### 2. 把yyyy-mm-dd格式数字日期改成中文日期
```
var str = getChsDate('2015-01-08');
function getChsDate(str){
	var CN = ['零','一','二','三','四','五','六','七','八','九']
	var a = str.split('-')
	var y = a[0].split(''),m = a[1].split(''),d = a[2].split('')
	str = transY(y)+'年'+transMD(m)+'月'+transMD(d)+'日'
	return str

	function transY(arr){
		arr = trim(arr)
		for(var i=0;i<arr.length;i++){
			arr[i]=CN[arr[i]]
		}
		return arr.join('')
	}
	function transMD(brr){
		brr = trim(brr)
		if(brr.length===1){
			brr=CN[parseInt(brr)]
			return brr
		}else if(parseInt(brr[0])===1){
			brr[0]='十'
			brr[1]=CN[parseInt(brr[1])]
			return brr.join('')
		}else {
			for(var i=0;i<brr.length;i++){
			  brr[i]=CN[brr[i]]
			}
			brr.splice(1,0,'十')  //splice返回的是被删除的元素，不是修改后的数组
			console.log(brr.join(''))
			return brr.join('')
		}
	}
	function trim(arr){
		if(parseInt(arr[0])===0){
			arr.shift()
		}
		return arr
	}
}
console.log(str);  // 二零一五年一月八日
```

### 3. 写一个函数，参数为时间对象毫秒数的字符串格式，返回值为字符串。假设参数为时间对象毫秒数t，根据t的时间分别返回如下字符串:

刚刚（ t 距当前时间不到1分钟时间间隔）
3分钟前 (t距当前时间大于等于1分钟，小于1小时)
8小时前 (t 距离当前时间大于等于1小时，小于24小时)
3天前 (t 距离当前时间大于等于24小时，小于30天)
2个月前 (t 距离当前时间大于等于30天小于12个月)
8年前 (t 距离当前时间大于等于12个月)

```
function friendlyDate(time){
	var a = Date.now()
	var interval = (a-time)/1000
	if(interval/60<1){
		return '刚刚'
	}else if(interval/60<60){
		var b = parseInt(interval/60)
		return b+'分钟前'
	}else if(interval/(60*60)<24){
		var b = parseInt(interval/(60*60))
		return b+'小时前'
	}else if (interval/(60*60*24)<30){
		var b = parseInt(interval/(60*60*24))
		return b+'天前'
	} else if(interval/(60*60*24*30)<12){
		var b = parseInt(interval/(60*60*24*30))
		return b+'月前'
	} else {
		var b = parseInt(interval/(60*60*24*30*12))
		return b+'年前'
	}
}
var str = friendlyDate('1496049631767')  //1天前
var str2 = friendlyDate('1483941245793') //4月前
```
