var webpack = require('webpack');

var config = {
    entry: [
      "bootstrap-webpack!./src/css/bootstrap.config.js",
      "font-awesome-webpack!./src/css/font-awesome.config.js",
    ],
    module: {
        loaders: [
            {test: /\.png$/,loader: "file?name=[name].[ext]"},
            { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ],
    },
    //proxy to the backend server so you can run the full build for backend with npn run build
    //but hot reload the frontent stuff using npn run dev
    devServer: {
        proxy: {
            '*': {
                target: 'http://localhost:55556',
                secure: false,
                ws: true
            },
        },
    },
};

module.exports = config;
