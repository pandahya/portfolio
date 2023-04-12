const path = require('path');
module.exports = {
    output:{
        entry: path.resolve(__dirname, './src'),
        filename: 'index.bundle.js',
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, './public'),
    },
};