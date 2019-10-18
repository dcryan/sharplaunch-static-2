// Webpack uses this to work with directories
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/app.js',
  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      // { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpeg|otf|...)$/,
        use: [
          { loader: 'url-loader', options: { limit: 8192, publicPath: './dist' } }
          // limit => file.size =< 8192 bytes ? DataURI : File
        ]
      }
    ],
  }
};