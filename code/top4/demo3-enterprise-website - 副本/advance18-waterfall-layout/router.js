app.get('/loadMore',function(req,res){
	var index = req.query.index
	var length = req.query.length
    var imgUrls = []
    imgUrls[0] = '../img/portfolio/xmen2000.jpg'
    imgUrls[1] = '../img/portfolio/xmen2003.jpg' 
    imgUrls[2] = '../img/portfolio/xmen2006.jpg' 
    imgUrls[3] = '../img/portfolio/xmen2009.jpg' 
    imgUrls[4] = '../img/portfolio/xmen2011.jpg' 
    imgUrls[5] = '../img/portfolio/xmen2013.jpg' 
    imgUrls[6] = '../img/portfolio/xmen2014.jpg' 
    imgUrls[7] = '../img/portfolio/deadpool.jpg' 
    imgUrls[8] = '../img/portfolio/xmen2016.jpg'
    imgUrls[9] = '../img/portfolio/xmen2017.jpg' 

	var data = []
	for(var i=0;i<length;i++){
		data.push({imgUrls[i],(i+Number(index))})
	}
	
    res.send(data)
})