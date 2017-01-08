const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname,
    devtool: 'cheap-module-eval-source-map',
    entry: getEntrySources(['./dev/js/index.js']),
    output: {
        path: path.join(__dirname, '/src/dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.css', '.sass', '.scss', '.js', '.json'],
        modulesDirectories: [
            'node_modules',
            path.resolve(__dirname, './node_modules')
        ]
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: { presets: ['es2015', 'stage-2', 'react'] }
            },
            {
              test: /(\.scss|.css)$/,
              exclude: /node_modules/,
              loader: ExtractTextPlugin.extract('style', 'css!sass')
            }
        ]
    },
    plugins: getPluginSources([
        new ExtractTextPlugin('bundle.css', { allChunks: true }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin()
    ])
}

function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-hot-middleware/client');
    }
    return sources;
}

function getPluginSources(plugins) {
    if (process.env.NODE_ENV !== 'production') {
        plugins.concat([
            new webpack.HotModuleReplacementPlugin(),
        ]);
    }
    return plugins;
}
