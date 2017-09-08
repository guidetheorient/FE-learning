const WebpackNotifierPlugin = require('webpack-notifier');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default
const imageminMozjpeg = require('imagemin-mozjpeg')
module.exports = {
  devtool: 'source-map', //source-map怎么查看
  devServer: {
    contentBase: '.', //本地服务器加载页面所在目录
    historyApiFallback: true, //不跳转
    inline: true //实时刷新
  },
  entry: './src/js/main.js',
  output: {
    path: __dirname + "/dist", //输出目录
    filename: "js/main_1.js" //输出文件名
  },
  plugins: [
    new WebpackNotifierPlugin({
      title: 'Webpack 编译成功',
      alwaysNotify: true
    }),
    new ExtractTextPlugin({
      filename: "css/main_1.css",
      disable: false,
      allChunks: true
    }),

    //将当前目录下index.html输出到dist下，但其中img路径不会变化
    new HtmlWebpackPlugin({
      title: "X-MEN",
      template: __dirname + "/index.html",
      filename: "index.html"
    }),

    // Make sure that the plugin is after any plugins that add images
    new ImageminPlugin({
      disable: false, // Disable during development
      pngquant: {
        quality: '40-50'
      },
      // plugins: [
      //   imageminMozjpeg({
      //     quality: 50,
      //     progressive: true
      //   })
      // ]
      // jpegtran:{
      //   arithmetic: '[30,40)', 
      //   progressive: true
      // },
    }),
    new ImageminPlugin({
      maxFileSize: 100000, // Only apply this one to files equal to or under 100kb
      plugins: [
        imageminMozjpeg({
          quality: 50,
          progressive: true
        })
      ]
    }),
    new ImageminPlugin({
      minFileSize: 100000, // Only apply this one to files over 100kb
      plugins: [
        imageminMozjpeg({
          quality: 25,
          progressive: true
        })
      ]
    })
  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        },
        //css中的url路径不正确，少了dist/css/中的css
        //所以自定义一下了
        publicPath:'../'
      })
    }, {
      
      test: /\.(png|jpg|jpeg|gif|woff|woff2|ttf|eot|svg|swf)$/,
      use: {
        loader: 'file-loader',
        //对loader的配置
        options: {
          name: 'img/[name]_[sha512:hash:base64:7].[ext]'
        }
      }
    }, 
    //将html，引入到了main.js中，用html-loader过一下，会是的file-loader处理其中的img
    {　　　　　　
      test: /\.html$/,
      use: {
        loader: 'html-loader'
      }
    }
    // {　　　　　　
    //   test: /\.html$/,
    //   use: {
    //     loader: 'html-withimg-loader'
    //   }
    // }
  ]
  }
}