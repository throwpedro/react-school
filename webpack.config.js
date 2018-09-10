const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    context: path.resolve(__dirname, "src"),
    entry: {
        app: './app.js',
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "./assets/js/[chunkhash].bundle.js",
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({tempalte:'../index.html'}),
    ],
    rules: [
        {
            test: /\.js$/,
            use:{
                loader: "babel-loader",
            },
        },
    ],
}
module.exports = config;