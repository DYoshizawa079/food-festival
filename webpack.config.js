const path = require("path");
const webpack = require("webpack");

module.exports = {
    // Set entry point - which is the root of the bundle and beginning of dependency graph
    entry: './assets/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
    ],
    mode: 'development'
};