const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/app.js",
    output: {
        path: __dirname + "/dist",
        filename: "app.js",
    },
    devServer: {
        port: 3000,
        compress: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader"},
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ]
}
