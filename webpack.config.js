const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const {
    extendDefaultPlugins
} = require("svgo");

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
    mode = 'production';
}

module.exports = {
    mode,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'img/[name][ext][query]',
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [{
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.mp3$/,
                loader: 'file-loader',
                options: {
                    name: 'audio/[name].[ext]'
                }
            },
            {
                test: /\.mp4$/,
                use: 'file-loader?name=video/[name].[ext]',
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
                type: 'asset',
            },
        ],
    },
    devServer: {
        hot: true,
    },
    optimization: {
        minimizer: [
            "...",
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.squooshMinify,
                },
            }),
        ],
    },
}