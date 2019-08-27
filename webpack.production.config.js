const path = require('path');

module.exports = {
  entry: './src/index.jsx',

  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
    library: 'cra-form-builder',
    libraryTarget: 'umd'
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
  performance: {
    hints: false
  }
};