module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest/fileMock.js',
    '\\.css$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(js|jsx|mjs)$': '<rootDir>/jest/customTransform.js',
  },
  setupTestFrameworkScriptFile: '<rootDir>/jest/setupTests.js',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
};
