// http://eslint.org/docs/user-guide/configuring

module.exports = {
    env: {
        jest: true
    },
    extends: [
        'plugin:vue/vue3-essential'
    ],
    rules: {
        'max-len': ['warn', 150],
        'vue/no-reserved-keys': ['warn'],
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
