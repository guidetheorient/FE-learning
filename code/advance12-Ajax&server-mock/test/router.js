app.get('/loadMore', function(req, res) {

	var index = req.query.index
	var len = req.query.len
	var data = []

	for(var i = 0; i < len; i++) {
		data.push('新闻' + (parseInt(curIdx) + i))
	}

	res.send(data);
});