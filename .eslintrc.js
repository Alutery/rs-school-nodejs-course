module.exports = {
    'env': {
        commonjs: true,
        es6: true,
        node: true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        ecmaVersion: 2018
    },
    'rules': {
        indent: ['error', 4],
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        'object-curly-spacing': ['error', 'always'],
        'space-in-parens': ['error', 'never']
    }
}