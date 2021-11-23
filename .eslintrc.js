module.exports = {
    env: {
        browser: true,
        node: true,
        jasmine: true,
        jest: true,
        es6: true,
        // worker: true,
        // mocha: true,
        // serviceworker: true,
    },
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    parserOptions: {
        // ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
        // project: './tsconfig.json',
    },
    extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:compat/recommended',
        'plugin:jest/recommended',
        'plugin:react/recommended',
        'plugin:import/typescript',
        'plugin:markdown/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:eslint-comments/recommended',
        'plugin:promise/recommended',
        'plugin:unicorn/recommended',
    ],
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {
                project: './tsconfig.json',
                alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
            },
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
        jsdoc: {
            mode: 'typescript',
        },
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
        polyfills: ['Promise', 'URL'],
    },
    plugins: [
        'react',
        'babel',
        'jest',
        '@typescript-eslint',
        'eslint-comments',
        'import',
        'react-hooks',
        'jsx-a11y',
        'promise',
        'unicorn',
        'markdown',
    ],
    rules: {
        'react/jsx-one-expression-per-line': 0,
        'react/prop-types': 0,
        'react/forbid-prop-types': 0,
        'react/jsx-indent': 0,
        'react/jsx-wrap-multilines': ['error', { declaration: false, assignment: false }],
        'react/state-in-constructor': 0,
        'react/jsx-props-no-spreading': 0,
        'react/require-default-props': 0,
        'react/sort-comp': 0,
        'react/display-name': 0,
        'react/static-property-placement': 0,
        'react/jsx-no-bind': 0, // Should not check test file
        'react/no-find-dom-node': 0,
        'react/no-unused-prop-types': 0,
        'react/default-props-match-prop-types': 0,
        // No jsx extension: https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904
        // 'react/jsx-filename-extension': 'off',
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. '@typescript-eslint/explicit-function-return-type': 'off',
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
        // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
        'react/destructuring-assignment': 'off',
        'react-hooks/rules-of-hooks': 2, // Checks rules of Hooks

        'comma-dangle': ['error', 'always-multiline'],
        'consistent-return': 0, // TODO: remove later
        'max-classes-per-file': 0,

        // https://github.com/typescript-eslint/typescript-eslint/issues/2540#issuecomment-692866111
        'no-use-before-define': 0,
        'no-shadow': 0,
        'no-undef': 0,
        // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
        'no-prototype-builtins': 'off',
        // Use function hoisting to improve code readability
        'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
        'no-param-reassign': 0, // TODO: remove later
        'no-underscore-dangle': 0,
        // for (let i = 0; i < len; i++)
        'no-plusplus': 0,
        // https://eslint.org/docs/rules/no-continue
        // labeledLoop is conflicted with `eslint . --fix`
        'no-continue': 0,
        // ban this for Number.isNaN needs polyfill
        'no-restricted-globals': 0,

        '@typescript-eslint/no-use-before-define': 2,
        '@typescript-eslint/no-shadow': [2, { ignoreTypeValueShadow: true }],
        // https://github.com/typescript-eslint/typescript-eslint/issues/2528#issuecomment-689369395
        // Allow most functions to rely on type inference. If the function is exported, then `@typescript-eslint/explicit-module-boundary-types` will ensure it's typed.
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',

        'jest/no-test-callback': 0,
        'jest/expect-expect': 0,
        'jest/no-done-callback': 0,
        'jest/valid-title': 0,
        'jest/no-conditional-expect': 0,

        // Common abbreviations are known and readable
        'unicorn/prevent-abbreviations': 'off',
        // Airbnb prefers forEach
        'unicorn/no-array-for-each': 'off',
        'unicorn/better-regex': 2,
        'unicorn/prefer-string-trim-start-end': 2,
        'unicorn/expiring-todo-comments': 2,
        'unicorn/no-abusive-eslint-disable': 2,

        // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'error',
        // disable warning on: export class NameClass ...
        'import/no-named-as-default': 0,
        'import/extensions': 0,
        'import/no-cycle': 0,
        // It's not accurate in the monorepo style
        // 'import/no-extraneous-dependencies': 'off',
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: ['tests/**', '**/*.test.js', '*.config.js', '**/*.md'],
            },
        ],

        // label-has-for has been deprecated
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
        'jsx-a11y/label-has-for': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/anchor-has-content': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/anchor-is-valid': 0,
        'jsx-a11y/no-noninteractive-element-interactions': 0,

        // Disallow the declaration of empty interfaces
        '@typescript-eslint/no-empty-interface': 'off',
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'], // Your TypeScript files extension
            parserOptions: {
                project: ['./tsconfig.json'], // Specify it only for TypeScript files
            },
        },
        {
            files: ['*.js', '*.jsx'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
        {
            files: ['src/**/*.ts', 'src/**/*.tsx'],
            plugins: ['@typescript-eslint'],
            rules: {
                'no-unused-expressions': 'off',
                'no-use-before-define': 'off',
                '@typescript-eslint/no-var-requires': 'off',
                '@typescript-eslint/no-use-before-define': ['error'],
                '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
                '@typescript-eslint/no-unused-expressions': 2,
            },
        },
        {
            files: ['components/*/demo/*.md'],
            processor: 'markdown/markdown',
        },
    ],
};
