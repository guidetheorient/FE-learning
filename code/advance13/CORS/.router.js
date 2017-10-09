function setRouter(app){ 
 var router = app; 

app.get('/getNews',function (req,res) {
	var news = ['1','2','3','4','5','6','7','8']
	var data = []
	for(var i=0;i<3;i++){
		var index = parseInt(Math.random()*news.length)
		data.push(news[index])
	}
	//不同后端语言写法不一样
	res.header('Access-Control-Allow-Origin','http://b.jrg.com:8080')
	//res.header('Access-Control-Allow-Origin','http://127.0.0.1:8080')
	//粗暴的写法 res.header('Access-Control-Allow_Origin','*')
	res.send(data)
})}
 module.exports.setRouter = setRouter