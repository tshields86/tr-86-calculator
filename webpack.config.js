var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, '/app/index.html'),
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  devtool: 'eval',
  entry: [
    './app/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    HtmlWebpackPluginConfig
  ],
  module: {
    loaders: [
      {
      test: /\.js$/,
      loaders: ['babel-loader'],
      include: path.join(__dirname, 'app'),
      exclude: /(node_modules|bower_components)/
    },
    {
      test: /\.css$/,
      loaders: ['style', 'css'],
    },
    {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
    },
    {
      test: /\.(woff|woff2|ttf|svg|eot)/,
      loader: 'url?limit=100000',
    }
    ]
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.js',
      Navigation: 'app/components/Navigation.js',
      Welcome: 'app/components/Welcome.js',
      About: 'app/components/About.js',
      Calculator: 'app/components/Calculator.js',
      applicationStyles: 'app/styles/app.scss'
    },
    extensions: ['', '.js', '.jsx', '.json', '.scss']
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './bower_components/bootstrap-sass/assets/stylesheets')
    ]
  }
};
