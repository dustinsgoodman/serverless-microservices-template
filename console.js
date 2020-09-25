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

Object.values(aliases).forEach((modulePath) => {
  const mod = require(modulePath);
  Object.entries(mod).forEach(([modName, modValue]) => {
    replServer.context[modName] = modValue;
  });
});

replServer.setupHistory('./.node_repl_history', () => {});
