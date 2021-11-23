const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
    target: ['web', 'es5'],
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src/'),
            Apps: path.resolve(__dirname, 'src/apps/'),
            Component: path.resolve(__dirname, 'src/component/'),
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    output: {
        clean: true,
    },
    entry: {
        vendors: {
            import: ['react', 'react-dom'],
            filename: 'vendors.js',
        },
        a: {
            import: 'Apps/header.tsx',
            filename: 'app/header.js',
            dependOn: 'vendors',
        },
        b: {
            import: 'Apps/main.tsx',
            filename: 'app/main.js',
            dependOn: 'vendors',
        },
        c: {
            import: 'Apps/footer.tsx',
            filename: 'app/footer.js',
            dependOn: 'vendors',
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|js|mjs|mts)x?$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-typescript',
                        ],
                    },
                },
            },
            {
                test: /\.(ts|tsx|mts)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                    },
                },
            },
        ],
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new ESLintPlugin({
            extensions: ['.tsx', '.ts', '.js'],
            exclude: ['node_modules'],
        }),
    ],
    experiments: {
        // asyncWebAssembly: true,
        // WebAssembly as async module (Proposal)
        // syncWebAssembly: true,
        // WebAssembly as sync module (deprecated)
        // outputModule: true,
        // Allow to output ESM
        // topLevelAwait: true,
        // Allow to use await on module evaluation (Proposal)
    },
};