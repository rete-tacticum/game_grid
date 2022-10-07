const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: path.resolve(__dirname, './src/index.ts'),
  devServer: {
    hot: true,
    port: 3000,
    static: {
      directory: path.join(__dirname, 'src')
    },
    compress: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
      },
      {
        test: /\.svg$/i,
        type: 'asset',
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js'],
    alias: {
      _pages: path.resolve(__dirname, 'src/pages'),
      _components: path.resolve(__dirname, 'src/components'),
      _assets: path.resolve(__dirname, 'src/assets'),
      _helpers: path.resolve(__dirname, 'src/helpers'),
      _interfaces: path.resolve(__dirname, 'src/typings/interfaces'),
      _contexts: path.resolve(__dirname, 'src/contexts'),
      _containers: path.resolve(__dirname, 'src/containers')
    }
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      entry: 'index.ts',
      title: 'GridGame free from CRA',
      template: path.resolve(__dirname, 'public', 'index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'css/main.css'
    })
  ]
}
