const path = require('path');

module.exports = {
  entry: './app.js',
  devtool: 'source-map',
  output: {
    path: path.resolve('./public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css', '.json']
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js|.jsx?$/,
        use: [
          { loader: 'babel-loader' }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                './node_modules'
              ]
            }
          }
        ]
      }
    ]
  },
  devServer: {
    port: 8080,
    host: 'localhost',
    historyApiFallback: true,
    publicPath: '/',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    contentBase: './public',
    open: true
  }
};