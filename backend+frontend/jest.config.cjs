module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/resources/js/setupTests.js'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy', // Menambahkan mapping untuk file CSS
    '^@/(.*)$': '<rootDir>/resources/js/$1',  // Menambahkan alias untuk @
    "setupFilesAfterEnv": ["<rootDir>/setupTests.js"]
  },
};
