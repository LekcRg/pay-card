const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    open: true,
    watchContentBase: true,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env'],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'import-glob-loader',
          },
        ],
      },
      {
        test: /\.(woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'font/',
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images/',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images/',
            },
          },
          // {
          //   loader: 'svgo-loader',
          //   options: {
          //     plugins: [
          //       { removeTitle: true },
          //       { convertColors: { shorthex: false } },
          //       { convertPathData: false },
          //     ],
          //   },
          // },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.min.css',
    }),
    new CopyWebpackPlugin([{
      from: './src/views/',
      test: /\.html/,
    }]),
    new CleanWebpackPlugin(
      'dist',
    ),
    new webpack.ProvidePlugin({
      $: 'jquery',
    }),
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: path.resolve(__dirname, 'src'),
      files: '**/*.scss',
      failOnError: false,
      quiet: false,
    }),
    new WebpackBuildNotifierPlugin({
      title: 'Webeefy',
      logo: path.resolve(__dirname, 'logo45.png'),
      suppressSuccess: true,
    }),
    // new BundleAnalyzerPlugin(),
  ],
};
