var webpack = require('webpack');

module.exports = {
    entry: __dirname + '/src/js/main.js',
    output: {
        path: __dirname + '/bin/',
        filename: 'bundle.js'
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        })
    ],
    
    module: {
        loaders: [
            {test: /\.css$/,loader: 'style-loader!css-loader'},
            {test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'},
            {test: /\.svg/, loader: 'svg-url-loader'},
            {test: /\.js$/, loader: 'babel-loader', query:{
                presets:['env']
            }}
        ]
    }
};
