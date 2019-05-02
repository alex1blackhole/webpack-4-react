const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {minimize: true}
                    }
                ]
            },

            {
                test: /\.scss$/,
                use:[
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {sourceMap:true}
                    },
                    {
                        loader: "postcss-loader",
                        options: {sourceMap:true , config:{path: 'src/app/js/postcss.config.js' } }
                    },
                    {
                        loader: "sass-loader",
                        options: {sourceMap:true}
                    },
                ]
            },

            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {sourceMap:true}
                    },
                    {
                        loader: "postcss-loader",
                        options: {sourceMap:true , config:{path: 'src/app/js/postcss.config.js' } }
                    },
                ]
            },
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        })
    ]
};