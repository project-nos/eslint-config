import {type Linter} from 'eslint'

const config: Linter.Config = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier'
    ],
    plugins: [
        '@typescript-eslint'
    ],
    parser: '@typescript-eslint/parser'
}

export = config