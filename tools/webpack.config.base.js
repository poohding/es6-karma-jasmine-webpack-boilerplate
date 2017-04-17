const path = require('path');

module.exports = function () {
    return {
        context: path.resolve(__dirname, '../src'),
        entry: {
            'spinner': './spinner.js',
            'spinner.min': './spinner.js'
        },
        output: {
            path: path.resolve(__dirname, '../dist'),
            filename: '[name].js',
            sourceMapFilename: './map/[file].map',
            library: 'spinner',
            libraryTarget: 'umd'
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.js$/,
                    enforce: 'pre',
                    loader: 'eslint-loader',
                    options: {
                        emitWarning: true,
                        formatter: require("eslint-friendly-formatter")
                    }
                }
            ]
        },
        externals: {
        }
    }
};
