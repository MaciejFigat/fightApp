module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: ['node_modules/(?!axios/.*)'],
}

// module.exports = {
//   preset: 'ts-jest',
//   testEnvironment: 'jsdom',
//   roots: ['<rootDir>/src'],
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
//   transformIgnorePatterns: ['/node_modules/(?!axios)'],
// }
// preset: 'ts-jest/presets/js-with-ts',
