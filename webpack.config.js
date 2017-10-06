module.exports = {
  entry: './app/main.js',
  output: {
    path: __dirname + '/dist/',
    filename: 'app.js',
    publicPath: __dirname + '/dist/',
    chunkFilename: 'vendor.js',
    libraryTarget: 'commonjs2'
  },
  node: {
    fs: 'empty'
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  }
};