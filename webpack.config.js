const path = require('path');

const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: {
    about:"./src/about.js",
    contact:"./src/contact.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname,"dist")
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000
  },
  optimization:{
    minimizer: [new UglifyJsWebpackPlugin()],
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options:{
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      } 
    },
    {
      test: /\.css$/,
      use: [
        {loader: 'style-loader'},
        {loader: 'css-loader'}
      ]
    }, {
      test: /\.(jpg|png)$/,
      use:[
        {loader: 'url-loader'}
      ]
    }
  ]
  }
}  