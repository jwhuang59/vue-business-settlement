module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['@vue/standard', 'plugin:vue/essential', 'plugin:prettier/recommended'],
    plugins: ['prettier'],
    globals: {
        uni: true,
        getApp: true
    },
    rules: {
        'prettier/prettier': 'off',
        'no-unused-vars': 'off',
        'no-extend-native': 'off',
        'no-debugger': 'off',
        'no-empty': 'off',
        'no-prototype-builtins': 'off',
        'vue/no-use-v-if-with-v-for': [
            'error',
            {
                allowUsingIterationVar: true
            }
        ]
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
};
