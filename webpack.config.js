const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./index.html",
  filename: "./index.html"
});

const hmrPlugin = new webpack.HotModuleReplacementPlugin();

module.exports = {
  context: __dirname + "/src",
  entry: {
    app: './index'
  },
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[id].bundle.js",
    path: __dirname + '/build'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  devServer: {
    contentBase: __dirname + '/build',
    hot: true
  },
  plugins: [
    htmlPlugin,
    hmrPlugin
  ]
}