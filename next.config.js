const development = require('./config/development.json');
const production = require('./config/production.json');

const environments = process.env.APP_ENV === 'production' ? production : development;

module.exports = {
  webpack: (config, { webpack }) => {
    config.plugins.push(new webpack.EnvironmentPlugin({
      APP_ENV: process.env.APP_ENV || 'development',
      ...environments,
      FIREBASE: JSON.stringify(environments.FIREBASE),
    }));

    return config;
  },
  distDir: './dist/.next',
};
