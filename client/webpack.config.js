const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const path = require('path')

module.exports = (env) => {
  const mode = env.mode || 'development'
  const PORT = env.port || 3000
  const isDev = mode === 'development'

  console.log(mode)

  return {
    mode,
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
      }),
      new webpack.ProgressPlugin(),
    ],

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react'],
            },
          },
        },
        {
          test: /\.css$/i,
          use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
      ],
    },
    resolve: {
      extensions: ['.jsx', '.js'],
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev
      ? {
          open: true,
          historyApiFallback: true,
        }
      : undefined,
  }
}
