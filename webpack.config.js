require("webpack");


const path = require("path");
const NodeMonPlugin = require("nodemon-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    target: "node",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new NodeMonPlugin(),
    ]
}
