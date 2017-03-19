// - webpack.config.js
// client side resources config
import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const PATHS = {
  APP: path.resolve(__dirname, '../public/src/app'),
  SRC: path.resolve(__dirname, '../public/src/app/index'),
  DIST: path.resolve(__dirname, '../public/dist'),
};

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    PATHS.SRC,
  ],
  output: {
    path: PATHS.DIST,
    filename: '[name].js',
    publicPath: '/',
  },
  devtool: 'eval-source-maps',
  resolve: {
    extensions: ['.js', '.scss'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('style.css'),
  ],
  rules: [
    {
      test: /\.js$/,
      use: ['babel'],
      exclude: [
        /node_modules/,
      ],
      include: [
        PATHS.APP,
      ],
    },
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader'],
      }),
    },
  ],
};
