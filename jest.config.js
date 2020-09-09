module.exports = {
  roots: ['<rootDir>'],
  transform: { '^.+\\.tsx?$': 'ts-jest' },
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    'app/(.*)': '<rootDir>/$1',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'identity-obj-proxy',
  },
  testMatch: ['**/__tests__/**/*.test.(ts|tsx|js)'],
  globals: {
    'ts-jest': {
      useBabelrc: true,
      tsConfigFile: 'tsconfig.jest.json',
    },
  },
};
