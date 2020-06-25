module.exports = {
    moduleFileExtensions: [
        'ts',
        'js',
    ],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    globals: {
        'ts-jest': {
            'tsConfig': 'tsconfig.json'
        }
    },
    testMatch: [
        '**/test/**/*.+(ts|js)'
    ],
    testEnvironment: 'node',
};
