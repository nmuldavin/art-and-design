const parseVariables = require('./buildUtils/parseVariables');

const variables = {
  ...parseVariables('src/client/styles/colors.css'),
};

module.exports = {
  plugins: {
    'postcss-preset-env': {
      stage: 0,
      features: {
        'custom-properties': {
          variables,
          preserve: process.env.NODE_ENV !== 'production',
        },
      },
    },
  },
};
