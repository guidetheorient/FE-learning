app.get('/postArtice;',function(req,res){
  console.log(req.body)
  res.send(req.body.article.substr(0,10)+'……')
})

app.get('/getMusic',function(req,res){
  console.log('有请求来了')
  console.log(req.query)
  if(req.query.name === 'hunger'){
    res.send('你好 hunger')
  }else{
    setTimeout(function(){
      res.send('i do not know you')
    })
  }
})

//课件上的错误导致mock start是报错Warning: no router.js found. You may need to run: mock init to create a sample router.js
//错误是有请求来啦后面的分号写成冒号。。。。。。。。。。
// app.get('/getMusic',function(reg,res){
//   console.log('有请求来啦')；
//   console.log(req.query)
//   if(req.query.name === 'hunger'){
//     res.send('你好 hunger');
//   }else{
//     setTimeout(function(){
//       res.send('我不认识你')
//     },10000)
//   }
// })


// app.get('/friends',function(req,res){
//   //req.query可以获取请求参数
//   var username = req.query.username
//   var ret = ['nobody']
//   if(username === 'ruoyu'){
//     ret = ['小明','小刚']
//   }
//   setTimeout(function(){
//     res.send(ret)
//   },3000)  
//   // res.send(ret)//res.send用于发送数据,然后前端通过js来生成html
// })