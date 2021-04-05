const path = require('path');

const rootPath = path.resolve(__dirname, '..');

module.exports = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    mainFields: ['main', 'module', 'browser'],
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'tests'),
      'node_modules',
    ],
  },
  devtool: 'source-map',
  entry: path.resolve(rootPath, 'electron', 'main.js'),
  target: 'electron-main',
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  node: {
    __dirname: false,
  },
  output: {
    path: path.resolve(rootPath, 'dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs',
  },
};
