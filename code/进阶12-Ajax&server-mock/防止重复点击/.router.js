function setRouter(app){ 
 var router = app; 

app.get('/loadMore',function(req,res){
	var index = req.query.index
	var length = req.query.len
	var data = []
	for(var i=0;i<length;i++){
		data.push('内容'+(i+Number(index)))
	}
	setTimeout(function(){
		res.send(data)
	}, 3000)
})}
 module.exports.setRouter = setRouter