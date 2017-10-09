function setRouter(app){ 
 var router = app; 

app.get('/getNews',function (req,res) {
	var news = ['1','2','3','4','5','6','7','8']
	var data = []
	for(var i=0;i<3;i++){
		var index = parseInt(Math.random()*news.length)
		data.push(news[index])
	}
	res.send(data)
})}
 module.exports.setRouter = setRouter