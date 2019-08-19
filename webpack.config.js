const path = require("path");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    plugins: [
        new BrowserSyncPlugin(
            {
                host: 'localhost',
                port: 3000,
                files: "*html,*js",
                proxy: 'http://localhost:8081/'
            },
            {
                reload:false
            }
        )
    ],
entry: "./src/app.js",
output: {
filename: "bundle.js",
},
devServer: {
contentBase: './dist',
contentBase: './',
port:8081,
},
watch: true,
};