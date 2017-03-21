/**
 * Created by zhouchenxi on 2017/2/3.
 */
var path = require('path');
module.exports = {
    entry: {
        index:'./src/main.js'
    },
    //定义webpack输出的文件，我们在这里设置了让打包后生成的文件放在dist文件夹下的build.js文件中
    output: {
        path: '/dist',
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        //加载器配置
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',},
            //.css 文件使用 style-loader 和 css-loader 来处理
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'},
            //转化ES6语法
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {presets: ['es2015']}
            },
            //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
            {
                test: /\.scss$/,
                loader: 'style!css!sass?sourceMap'},
            //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'},
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules(?!\/(vue-tables-2|vue-pagination-2))/
            },
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js',
        },
        extensions: ['*','.js', '.vue','.css']
    }
}