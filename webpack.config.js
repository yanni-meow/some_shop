const webpack = require('webpack');
const path = require('path');
const package = require('./package.json');

// variables
const sourcePath = path.join(__dirname, './src');
const outPath = path.join(__dirname, './build');

// plugins
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  context: sourcePath,
  entry: {
    app: './index.tsx',
  },
  output: {
    path: outPath,
    publicPath: '/',
    filename: '[hash].js',
    chunkFilename: '[name].[hash].js',
  },
  target: 'web',
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css", ".scss"],
    // Fix webpack's default behavior to not load packages with jsnext:main module
    // (jsnext:main directs not usually distributable es6 format, but es6 sources)
    mainFields: ['module', 'browser', 'main'],
    // alias: {
    //   app: path.resolve(__dirname, 'src/app/'),
    //   style: path.resolve(__dirname, 'src', 'style')
    // },
  },
  module: {
    rules: [
      // eslinter
      {
        test: /\.(ts|tsx)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              eslintPath: require.resolve('eslint'),

            },
            loader: require.resolve('eslint-loader'),
          },
          {
            loader: 'babel-loader',
            options: { plugins: ['react-hot-loader/babel'] },
          },
          'ts-loader',
        ],
        exclude: /node_modules/,
      },
      // css
      {
        test: /\.css|scss$/,
        use: [
          { loader: "style-loader" }, 
          { loader: "css-modules-typescript-loader"},
          { loader: "css-loader", options: { modules: true } }, 
          // {
          //   loader: 'css-loader',
          //   query: {
          //     sourceMap: true,
          //     importLoaders: 1,
          //     modules: {
          //       localIdentName: '[local]-[hash:base64:5]',
          //     },
          //   },
          // },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('postcss-import')({ addDependencyTo: webpack }),
                require('postcss-url')(),
                require('postcss-preset-env')({
                  /* use stage 2 features (defaults) */
                  stage: 2,
                }),
                require('postcss-reporter')(),
                require('postcss-browser-reporter')({
                  disabled: false,
                }),
              ],
            },
          },
          { loader: "sass-loader" }
        ],
        // exclude: /\.css$/,
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     'style-loader',
      //     'css-loader',
      //   ],
      //   include: /\.css$/,
      // },
      // static assets
      { test: /\.html$/, use: 'html-loader' },
      { test: /\.(a?png)$/, use: 'url-loader?limit=10000' },
      {
        test: /\.(jpe?g|gif|bmp|mp3|mp4|ogg|wav|eot|ttf|woff|woff2|ico)$/,
        use: 'file-loader',
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      },
    ],
  },
  optimization: {
    splitChunks: {
      name: true,
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          filename: 'vendor.[hash].js',
          priority: -10,
        },
      },
    },
    runtimeChunk: true,
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
      DEBUG: false,
    }),
    new CleanWebpackPlugin(),
    new SpriteLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[hash].css',
    }),
    new HtmlWebpackPlugin({
      template: 'assets/index.html',
      favicon: 'assets/icons/favicon.ico',
      minify: {
        minifyJS: true,
        minifyCSS: true,
        removeComments: true,
        useShortDoctype: true,
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
      },
      // append: {
      //   head: `<script src="//cdn.polyfill.io/v3/polyfill.min.js"></script>`,
      // },
      meta: {
        title: package.name,
        description: package.description,
        keywords: Array.isArray(package.keywords) ? package.keywords.join(',') : undefined,
      },
    }),
    new BundleAnalyzerPlugin(),
    // moment
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ru/)
  ],

  // // https://webpack.js.org/configuration/devtool/
  // devtool: 'cheap-module-eval-source-map',
  // node: {
  //   // workaround for webpack-dev-server issue
  //   // https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
  //   fs: 'empty',
  //   net: 'empty',
  // },
};
