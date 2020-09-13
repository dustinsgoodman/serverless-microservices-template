const babelJest = require('babel-jest');
const aliases = require('./aliases');

module.exports = babelJest.createTransformer({
  presets: ['@babel/preset-env'],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
    [
      'module-resolver',
      {
        root: ['./'],
        alias: aliases
      }
    ]
  ],
  babelrc: false,
  configFile: false,
});
