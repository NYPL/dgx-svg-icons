const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const rootPath = path.resolve(__dirname);

if (process.env.NODE_ENV !== 'development') {
  module.exports = {
    devtool: 'source-map',
    entry: {
      'dgx-react-buttons': [
        path.resolve(rootPath, 'src/icons.jsx')
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    output: {
      path: path.join(rootPath, '/dist'),
      filename: 'index.min.js',
      libraryTarget: "umd",
      library: "dgxSvgIcons",
      globalObject: "this",
    },
    externals: {
      // Required in order to ignore library within other components
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    },
    optimization: {
      minimizer: [
        new TerserWebpackPlugin({
          terserOptions: {
            warnings: false,
          },
        }),
      ],
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin()
    ]
  };
} else {
  module.exports = {
    devtool: 'eval',
    entry: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './src/app.jsx'
    ],
    output: {
      path: path.resolve(rootPath, 'dist'),
      filename: 'index.min.js',
      publicPath: 'http://localhost:3000/'
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin('styles.css'),
      new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        },
        {
          test: /\.scss?$/,
          loader: 'style-loader!css-loader!sass-loader',
          include: path.resolve(rootPath, 'src/styles')
        }
      ]
    }
  };
}
