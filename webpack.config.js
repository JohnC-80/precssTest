var path = require('path');
var webpack = require('webpack');
module.exports ={
    entry: "./public/app.js",
    noInfo: true,
    output:{
        path: path.resolve(__dirname,"public/bundle"),
        publicPath: "/bundle",
        filename: "bundle.js"
    },
    module:{
        loaders:[
            {test: /\.js$/,
             include:[
                       path.resolve(__dirname, "public/")
                   ],
             exclude: /node_modules/,
             loader: "babel-loader"
            },
            {
                test:/\.css$/,
                exclude: /public/,
                loader:'style!css'
            },
            {
                test:/\.css$/,
                exclude: /node_modules/,
                loader:'style/useable!css?modules=true&localIdentName=[local]--[hash:base64:10]!postcss'
            }
        ]
    },
    postcss(webpack){
        return[
            require('postcss-import')({addDependencyTo: webpack}),
            require('postcss-url'),
            require('postcss-discard-comments'),
            require('precss'),
            require('postcss-color-function')
        ];
    }
};


