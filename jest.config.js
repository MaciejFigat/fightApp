module.exports = {
  projects: [
    {
      displayName: 'browser env',
      preset: 'ts-jest',
      testEnvironment: 'jsdom',
      roots: ['<rootDir>/src/'],
    },
  ],
}
