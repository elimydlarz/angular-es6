module.exports = {
  entry: './app/app.js',
  output: {
    path: 'app',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: [/node_modules/, /spec/], loader: 'babel-loader' },
    ],
  },
};
