function setRouter(app){ 
 var router = app; 

/**
 * ʹ�÷���
 */


/**
 * ���� GET ������ �޲���
 * GET /query
 * ������Ӧ����
 */
app.get('/friends', function(req, res) {
	//req.query ���Ի�ȡ��������
	var username = req.query.username
	var ret = ['nobody']
	if(username == 'ruoyu'){
		ret = ['С��', 'С��']
	}
	res.send(ret)  //res.send���ڷ�������

});


/**
 * ҳ��·�ɣ���ģ����Ⱦҳ����Ⱦҳ��, 
 * http://localhost:8080/user
 * ֧�� ejs, jade ģ��
 */
app.get('/user', function(req, res) {
	var username = req.query.username
	var friends
	if(username == 'ruoyu'){
		friends = ['С��', 'С��']
	}else {
		friends = ['nobody']
	}

	res.render('user.ejs', {
		friends: friends
	});
});

app.post('/user', function(req, res) {
	var username = req.body.username
	console.log(username)
	var friends
	if(username == 'ruoyu'){
		friends = ['С��', 'С��']
	}else {
		friends = ['nobody']
	}

	setTimeout(function(){
			res.render('user.ejs', {
		friends: friends
	});
	}, 8000)
	// res.render('user.ejs', {
	// 	friends: friends
	// });
});



}
 module.exports.setRouter = setRouter