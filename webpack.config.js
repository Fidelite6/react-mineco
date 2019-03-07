var path = require('path');
var hwp = require('html-webpack-plugin');

module.exports = {
    devServer: {
        inline: true,
        contentBase: './src',
        port: 3000
    },
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/dist')
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'stage-3', 'react']
            }
        }]
    },
    plugins: [
        new hwp({template: path.join(__dirname, '/src/index.html')})
    ]
}
