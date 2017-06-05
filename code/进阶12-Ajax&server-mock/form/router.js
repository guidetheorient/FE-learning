app.get('/friends',function(req,res){
	//req.query可以获取请求参数
	var username = req.query.username
	var ret = ['nobody']
	if(username === 'ruoyu'){
		ret = ['小明','小刚']
	}
	res.send(ret)  //res.send用于发送数据
})


app.get('/user',function(req,res){
	var username = req.query.username
	var friends
	if(username === 'ruoyu'){
		friends = ['小明','小刚']
	}else{
		friends = ['nobody']
	}
	res.render('user.ejs',{friends:friends})
})

app.post('/user',function(req,res){
	var username = req.body.username
	var friends
	if(username === 'ruoyu'){
		friends = ['小明','小刚']
	}else{
		friends = ['nobody']
	}
	res.render('user.ejs',{friends:friends})
})