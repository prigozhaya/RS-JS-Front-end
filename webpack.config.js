const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const baseConfig = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    modules:[
      'node_modules',
      path.join(process.env.NPM_CONFIG_PREFIX || __dirname, 'lib/node_modules')
    ],
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ]
  },
  resolveLoader: {
    modules:[
      'node_modules',
      path.join(process.env.NPM_CONFIG_PREFIX || __dirname, 'lib/node_modules')
    ]
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules|cdn_modules/
      }, 
      {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                use: 'file-loader',
            },
    ]
  },
  plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
        /*new CopyPlugin({
            patterns: [
              { from: "src/img", to: "img" }
            ]
          }),*/
    ],
  stats: {
       errorDetails: true,
       children: true
    },
    devServer: {
      static: path.resolve(__dirname, 'dist'),
      port: 9000
    }
};

module.exports = ({ mode }) => {
  const isProductionMode = mode === 'prod';
  const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

  return merge(baseConfig, envConfig);
};
