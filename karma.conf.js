// Karma configuration
// Generated on Thu Mar 16 2017 11:50:43 GMT+0900 (KST)
const path = require('path');
const dev = process.env.NODE_ENV === 'dev';

module.exports = function (config) {
    config.set({
        browsers: ['Chrome'],
        frameworks: [
            'jasmine-jquery',
            'jasmine',
        ],
        files: [
            'test/tests.webpack.js',
            // { pattern: 'test/*.html', included: false },
        ],
        preprocessors: {
            'test/tests.webpack.js': ['webpack', 'sourcemap'],
        },
        webpack: {
            cache: true,
            devtool: 'inline-source-map',
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        include: path.resolve('src/'),
                        enforce: 'pre',
                        loader: 'eslint-loader',
                        options: {
                            emitWarning: true,
                            formatter: require("eslint-friendly-formatter")
                        }
                    },
                    {
                        test: /\.js?$/,
                        include: path.resolve('src/'),
                        loader: 'istanbul-instrumenter-loader',
                        query: {
                            esModules: true
                        }
                    },
                ]
            },
            externals: {
                jquery: 'jQuery'
            }
        },
        reporters: ['progress', 'coverage-istanbul'],
        coverageIstanbulReporter: {
            reports: ['html', 'lcovonly', 'text-summary'],
            dir: path.join(__dirname, 'coverage'),
            fixWebpackSourcePaths: true,
            'report-config': {
                html: {
                    subdir: 'html'
                },
                lcovonly: {
                    subdir: '.'
                }
            },
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        singleRun: true,

        // Which plugins to enable
        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-jasmine-jquery',
            'karma-webpack',
            'karma-sourcemap-loader',
            'karma-coverage-istanbul-reporter'
        ],
    });

    if (dev) {
        config.set({
            autoWatch: true,
            singleRun: false
        });
    }
}
