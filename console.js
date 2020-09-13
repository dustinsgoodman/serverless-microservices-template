const repl = require('repl');
const aliases = require('./aliases');
require('dotenv').config({ path: './.env.development' });
require('@babel/register')({
  babelrc: false,
  configFile: false,
  presets: ['@babel/preset-env'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    [
      'module-resolver',
      {
        root: ['./'],
        alias: aliases,
      },
    ],
  ],
});

const replServer = repl.start({
  prompt: 'app > ',
});

const utils = require('./src/utils');
Object.keys(utils).forEach((utilname) => {
  replServer.context[utilname] = utils[utilname];
});

replServer.setupHistory('./.node_repl_history', () => {});
