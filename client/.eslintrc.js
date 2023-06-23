module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['standard', 'plugin:react/recommended'],
    overrides: [
        {
            env: {
                node: true
            },
            files: ['.eslintrc.{js,jsx,cjs}'],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react'],
    settings: {
        react: {
            version: 'detect'
        }
    },
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/prop-types': 'off',
        'no-unused-vars': 'warn'
    }
}
