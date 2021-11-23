module.exports = {
    trailingComma: 'all',
    tabWidth: 2,
    semi: true,
    singleQuote: true,
    printWidth: 100,
    proseWrap: "never",
    arrowParens: "avoid",
    overrides: [
        {
            "files": ".prettierrc",
            "options": {
                "parser": "json"
            }
        },
        {
            files: '.editorconfig',
            options: { parser: 'yaml' },
        },
        {
            files: ['LICENSE', 'README.md'],
            options: { parser: 'markdown' },
        },
    ],
};
