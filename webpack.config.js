const path = require('path');

module.exports = {
  // mode: "development",
  entry: {
    popup: path.resolve(__dirname, 'src/popup.js'),
    background: path.resolve(__dirname, 'src/background.js')
  },
  output: {
    filename: '[name]/[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    // Loaders provide guidelines of how to transform content under specific file extensions.
    rules: [
      // { test: /\.(js|jsx)$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.(css|scss)$/, use: ["style-loader", "css-loader", "sass-loader"] },
      // { test: /\.(ttf|eot|woff|woff2|ico|svg|png)$/, loader: "file-loader" }
    ]
  },
};