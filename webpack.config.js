const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { EnvironmentPlugin } = require('./node_modules/webpack');
const developmentConfig = require('./config/development.json');
const productionConfig = require('./config/production.json');

const environments = process.env.APP_ENV === 'production' ? productionConfig : developmentConfig;

module.exports = {
  mode: process.env.APP_ENV === 'production' ? 'production' : 'development',
  entry: path.resolve(__dirname, 'functions/index.ts'),
  target: 'node',
  node: {
    __dirname: false,
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'this',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      app: path.resolve(__dirname, './'),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        include: [
          path.resolve(__dirname, 'functions'),
        ],
        exclude: [
          /node_modules/,
          path.resolve(__dirname, 'src'),
        ],
        options: {
          configFile: path.resolve(__dirname, 'tsconfig.server.json'),
        },
      },
    ],
  },
  plugins: [
    new EnvironmentPlugin({
      NODE_ENV: 'production',
      APP_ENV: process.env.APP_ENV || 'development',
      ...environments,
      FIREBASE: JSON.stringify(environments.FIREBASE),
    }),
  ],
  externals: [nodeExternals()],
};
