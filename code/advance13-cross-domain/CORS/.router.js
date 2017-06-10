function setRouter(app){ 
 var router = app; 

app.get('/getNews',function(req,res){
	var news = [1,2,3,4,5,6,7,8,9]
	var data = []
	for(var i=0;i<3;i++){
		var index = parseInt(Math.random()*news.length)
		//要先声明data是一个数组才能用push，否则会报错
		data.push(news[index])
	}

	res.header('Access-Control-Allow-Origin','http://localhost:8080')
	res.send(data)
})}
 module.exports.setRouter = setRouter