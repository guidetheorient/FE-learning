
app.get('/getMusic',function(req,res){
  console.log('有请求来了');
  console.log(req.query);
  if(req.query.name == 'hunger'){
    res.send('你好 hunger')
  }else{
    res.send('i do not know you')
  };
})
