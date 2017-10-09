/*
Ajax之前是form表单
*/


/*使用
1.mock工具 server-mock可以识别router.js  server-mock依赖了ejs,所以不用安装ejs啦
2.访问localhost:8080/user
*/


/**
 * 发送 GET 请求， 无参数
 * GET /query
 * 返回响应数据
 */
app.get('/friends', function(req, res) {
	//req.query 可以获取请求参数
	var username = req.query.username
	var ret = ['nobody']
	if(username == 'ruoyu'){
		ret = ['小明', '小刚']
	}
	res.send(ret)  //res.send用于发送数据

});


/**
 * 页面路由，从模板渲染页面渲染页面, 
 * http://localhost:8080/user
 * 支持 ejs, jade 模板
 * get的参数通过query取,详见bodejs的取参方式
 */
app.get('/user', function(req, res) {
  var username = req.query.username
  console.log(req.query)
	var friends
	if(username == 'ruoyu'){
		friends = ['小明', '小刚']
	}else {
		friends = ['nobody']
	}

	res.render('user.ejs', {
		friends: friends
	});
});

// post的参数通过req.body获取

app.post('/user', function(req, res) {
  var username = req.body.username
  console.log(req.body,1)
	var friends
	if(username == 'ruoyu'){
		friends = ['小明', '小刚']
	}else {
		friends = ['nobody']
	}

	// setTimeout(function(){
	// 		res.render('user.ejs', {
	// 	friends: friends
	// });
	// }, 8000)
	res.render('user.ejs', {
		friends: friends
	});
});



