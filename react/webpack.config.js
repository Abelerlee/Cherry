/**
 * Created by hasee on 2016/6/11.
 */

var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin')

module.exports = (function( ) {
    var config = {
        entry:{
            build:'./src/build.js'/*,
            login:'./src/login.js'*///编译的入口文件
        },
        output: {
            path: './build',/*to*///编译到的目录
            filename: '[name].js',//编译后的文件名字
        },
        /*devtool:'source-map',*//*可以查看打包的资源*/
        module: {
            loaders: [
                {   test: /\.(js|jsx)$/,
                    loader: "jsx-loader",
                    exclude: /^node_modules$/ /*排除*/
                },
                {
                    test:/\.(css)$/,
                    loader:'style!css',
                    exclude:/^node_modules$/
                },
                {
                    test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
                    exclude: /^node_modules$/,
                    loader: 'file-loader?name=[name].[ext]'
                },
                {   test:/\.(png|jpg)$/,
                    loader:'url-loader?limit=10000',
                    exclude:/^node_modules$/
                }//限制大小小于10k的
           ],
        }/*,
        devServer: {
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,
        },*/
        ,
        plugins: [
            new webpack.NoErrorsPlugin(), //允许错误不打断程序
            /*生成html 文件*/
           /* new HtmlwebpackPlugin({
                title: 'Hello World app'
            })
            //压缩打包的文件
            ,*/
           /* new webpack.optimize.UglifyJsPlugin({
                compress: {
                    //supresses warnings, usually from module minification
                    warnings: false
                }
            })*/
        ]
    };
    return config;
})();