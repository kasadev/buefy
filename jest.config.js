module.exports = {
    roots: [
        '<rootDir>/src'
    ],
    moduleFileExtensions: [
        'js',
        'vue'
    ],
    transform: {
        '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
        '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
    },
    moduleNameMapper: {
        '^@components/(.*)$': '<rootDir>/src/components/$1',
        '^@utils/(.*)$': '<rootDir>/src/utils/$1',
        '^vue$': '@vue/compat'
    },
    snapshotSerializers: [
        '<rootDir>/node_modules/jest-serializer-vue'
    ],
    setupFilesAfterEnv: ['./jest.setup.js'],
    coverageDirectory: './coverage/',
    collectCoverage: true,
    testURL: 'http://localhost/'
}
