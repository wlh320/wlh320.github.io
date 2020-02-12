const path = require('path')
module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'bin'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
             {test: /\.css$/,loader: 'style-loader!css-loader'},
        ]
    },
    mode: 'production',
};
