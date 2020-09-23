const path = require('path');
const webpack = require('webpack');
const slsw = require('serverless-webpack');
const TerserPlugin = require('terser-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const Visualizer = require('webpack-visualizer-plugin');
const { StatsWriterPlugin } = require('webpack-stats-plugin');
const aliases = require('./aliases');

const ENABLE_DEBUGGING = false;
const IS_LOCAL = ENABLE_DEBUGGING ? false : slsw.lib.webpack.isLocal;
const servicePath = slsw.lib.serverless && slsw.lib.serverless.config && slsw.lib.serverless.config.servicePath || '';

// configurable settings
const ENABLE_STATS = ENABLE_DEBUGGING || IS_LOCAL; // only want stats locally
const ENABLE_SOURCE_MAPS = !IS_LOCAL; // only want source maps in prod
const ENABLE_CACHING = IS_LOCAL;

function entries() {
  const entries = slsw.lib.entries;
  for (let key in entries) {
    entries[key] = path.join(servicePath, entries[key]);
  }
  return entries;
}

function babelLoader() {
  const plugins = [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
  ];

  if (ENABLE_SOURCE_MAPS) {
    plugins.push('babel-plugin-source-map-support');
  }

  return {
    loader: 'babel-loader',
    options: {
      // Enable caching
      cacheDirectory: ENABLE_CACHING,
      // Disable compressing cache files to speed up caching
      cacheCompression: false,
      plugins: plugins.map(require.resolve),
      presets: [
        [
          require.resolve('@babel/preset-env'),
          {
            targets: {
              node: '12.18.2'
            },
            useBuiltIns: 'usage',
            corejs: 3
          }
        ]
      ]
    }
  };
}

function loaders() {
  const loaders = {
    rules: [
      // process JS files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [babelLoader()]
      },
      // removed css related loaders b/c we don't use them here _yet_
      // ignore image files
      {
        test: /\.gif|\.svg|\.png|\.jpg|\.jpeg$/,
        loader: 'ignore-loader'
      }
    ]
  };
  return loaders;
}

function plugins() {
  const plugins = [];

  if (ENABLE_CACHING) {
    plugins.push(
      new HardSourceWebpackPlugin({
        info: {
          mode: ENABLE_STATS ? 'test' : 'none',
          level: ENABLE_STATS ? 'debug' : 'error'
        }
      })
    );
  }

  // Ignore all locale files of moment.js
  plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));

  if (ENABLE_DEBUGGING) {
    plugins.push(new Visualizer());
    plugins.push(new StatsWriterPlugin({
      filename: "stats.json",
      stats: {
        all: true
      }
    }));
  }


  return plugins;
}

function optimization() {
  const optimizationConfig = {
    concatenateModules: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: ENABLE_CACHING,
        parallel: IS_LOCAL, // https://github.com/webpack-contrib/terser-webpack-plugin#parallel
        terserOptions: {
          mangle: false, // need to disable for graphql
          output: {
            comments: false,
          },
        },
        extractComments: false
      }),
    ],
    usedExports: true, // enables tree shaking
  };

  if (IS_LOCAL) {
    optimizationConfig.removeEmptyChunks = false;
    optimizationConfig.removeAvailableModules = false;
    optimizationConfig.splitChunks = false;
  }

  return optimizationConfig;
}

module.exports = {
  entry: entries(),
  target: 'node',
  context: path.resolve(__dirname),
  // Verbose Logging
  stats: ENABLE_STATS ? (ENABLE_DEBUGGING ? 'verbose' : 'normal') : 'errors-only',
  devtool: ENABLE_SOURCE_MAPS ? 'source-map' : false,
  // Exclude aws-sdk b/c it's a built-in on lambda and nodeExternals b/c
  // we're in a node runtime and not on the browser
  externals: ['aws-sdk', nodeExternals()],
  mode: IS_LOCAL ? 'development' : 'production',
  performance: {
    // Turn off size warnings for entry points
    hints: false
  },
  resolve: {
    // Performance
    symlinks: false,
    // import aliases
    alias: aliases,
    // We don't package services individually so only look
    // inside the project's node_modules
    modules: ['node_modules'],
  },
  module: loaders(),
  // PERFORMANCE ONLY FOR DEVELOPMENT
  optimization: optimization(),
  plugins: plugins(),
  node: {
    __dirname: false
  }
};
