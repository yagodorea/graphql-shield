const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        exclude: [ path.resolve(__dirname, 'node_modules') ],
        test: /\.ts$/,
        use: 'ts-loader'
      },
    ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: [ '.ts', '.js', '.graphql' ],
  },
  target: 'node'
};