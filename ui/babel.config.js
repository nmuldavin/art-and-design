module.exports = {
  presets: [
    ['@babel/preset-env', { useBuiltIns: 'usage' }],
    '@babel/preset-react',
  ],
  env: {
    development: {
      plugins: ['react-hot-loader/babel'],
    },
  },
};
