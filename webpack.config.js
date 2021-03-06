const path = require('path')

module.exports = {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, "./public"),
    historyApiFallback: true,
        proxy: {
          '/api':{
                target:'http://localhost:5000/',
                pathRewrite: {'^/api' : ''},
                secure:false,
                changeOrigin:true
          }
        },
  },
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, './client/index.js'),
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: ['babel-loader', 'source-map-loader']
      }
    ]
  }
}