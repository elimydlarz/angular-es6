module.exports = {
  node: {
    fs: 'empty',
    tls: 'empty',
    net: 'empty',
  },
  entry: './app/app.js',
  output: {
    path: 'app',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.json$/, loader: 'json-loader' },
    ],
  },
};
