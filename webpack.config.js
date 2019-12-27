const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = env => ({
  entry: ["core-js/stable", "regenerator-runtime/runtime", "./src/index.js"],
  output: {
    publicPath: '/',
    filename: 'js/[name].[chunkhash].js',
    path: path.resolve(`${__dirname}/build`)
  },
  mode: env ? env.mode : "none",
  optimization: {
    runtimeChunk: 'single',

    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        use: ['babel-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 3000,
    historyApiFallback: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: './public/index.html',
      minify: {
        collapseWhitespace: true
      },
      hash: true
    }),
    new ManifestPlugin({
      fileName: 'manifest.json'
    }),
    new CopyWebpackPlugin([
    //   {
    //     from: 'public/icons',
    //     to: './',
    //     toType: 'dir'
    //   },
      {
        from: 'public/assets',
        to: './assets',
        toType: 'dir'
      }
    ])
    // new webpack.DefinePlugin({
    //   KEY: JSON.stringify('<VALUE>'),
    // })
  ]
})
