var path = require("path");
var webpack = require("webpack");

module.exports = {
    context: __dirname,
    entry: {
        home: path.join(__dirname, "Scripts/Home/Index.ts")
    },
    output: {
        path: path.join(__dirname, "wwwroot/js"),
        filename: "[name].bundle.js"
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
        alias: {
            "jquery$": path.join(__dirname, "node_modules/jquery/src/jquery.js"),
            "jquery.fancytree": path.join(__dirname, "node_modules/jquery.fancytree/dist"),
            "jquery-ui": path.join(__dirname, "node_modules/jquery-ui/ui"),
            "uikit": path.join(__dirname, "node_modules/uikit")
        }
    },
    module: {
        rules: [
            { test: /\.(ts|tsx)$/, use: "ts-loader" },
            { test: /\.html$/, use: "html-loader" },
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"]  },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, use: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, use: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" },
            { test: /\.(jpe?g|png|gif|svg)$/i, loaders: [ 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]', 'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false' ]}
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};