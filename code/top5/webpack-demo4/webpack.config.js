//__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
module.exports = {
  devtool:'source-map',   //source-map怎么查看
  devServer:{
    contentBase:'./public',  //本地服务器加载页面所在目录
    historyApiFallback:true, //不跳转
    inline:true           //实时刷新
  },
  entry: __dirname + "/app/main.js",  //入口文件
  output:{
    path:__dirname + "/public",       //输出目录
    filename:"bundle.js"              //输出文件名
  },
  module:{
    rules:[
      {
        test:/(\.jsx|\.js)$/,
        use:{
          loader:"babel-loader",
        },
        exclude:/node_mudules/
      }
    ]
  }
}