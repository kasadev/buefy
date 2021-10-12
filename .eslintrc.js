// http://eslint.org/docs/user-guide/configuring

module.exports = {
    env: {
        jest: true,
        browser: true
    },
    parserOptions: {
        ecmaVersion: 2020
    },
    extends: [
        'standard',
        'plugin:vue/vue3-essential'
    ],
    rules: {
    // eslint
    // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'indent': ['error', 4, { 'SwitchCase': 1 }],
        'space-before-function-paren': ['error', {
            'anonymous': 'always',
            'named': 'never'
        }],
        'max-len': ['warn', {
            'code': 150,
            'tabWidth': 4,
            'ignoreUrls': true,
            'ignoreStrings': true,
            'ignoreTemplateLiterals': true,
            'ignoreRegExpLiterals': true
        }],
        'no-console': ['warn'],
        'arrow-parens': ['error', 'always'],
        'max-depth': ['error', 4],
        'vue/html-indent': ['error', 4],
        'vue/max-attributes-per-line': [2, {
            'singleline': 2,
            'multiline': {
                'max': 1,
                'allowFirstLine': false
            }
        }],

        // vue
        'vue/require-v-for-key': ['warn'],
        'vue/order-in-components': ['error', {
            order: [
                'el',
                'name',
                'parent',
                'functional',
                ['delimiters', 'comments'],
                ['components', 'directives', 'filters'],
                'extends',
                'mixins',
                'inheritAttrs',
                'model',
                ['props', 'propsData'],
                'data',
                'computed',
                'watch',
                'methods',
                'LIFECYCLE_HOOKS',
                ['template', 'render'],
                'renderError'
            ]
        }],
        'vue/no-reserved-keys': 0,
        'vue/require-default-prop': 0,
        // vue 3 compat
        'vue/no-deprecated-v-bind-sync': 0,
        'vue/no-deprecated-v-on-native-modifier': 0,
        'vue/no-deprecated-dollar-scopedslots-api': 0,
        // '': 0,
        // import
        'import/no-webpack-loader-syntax': 0,
        'vue/attributes-order': 'off',
        'vue/html-self-closing': ['error', {
            'html': {
                'void': 'never',
                'normal': 'always',
                'component': 'always'
            },
            'svg': 'always',
            'math': 'always'
        }]
    }
}
