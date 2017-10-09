//ajax方式

app.get('/friends',function(req,res){
  //req.query可以获取请求参数
  var username = req.query.username
  var ret = ['nobody']
  if(username === 'ruoyu'){
    ret = ['小明','小刚']
  }
  setTimeout(function(){
    res.send(ret)
  }, 3000) 
  //res.send(ret) //res.send是express用于发送数据,然后前端通过js来生成html
})

//form表单方式

// app.get('/user',function(req,res){
//  var username = req.query.username
//  var friends
//  if(username === 'ruoyu'){
//    friends = ['小明','小刚']
//  }else{
//    friends = ['nobody']
//  }
//  res.render('user.ejs',{friends:friends})//后端将数据处理好，直接渲染到模板上
// })