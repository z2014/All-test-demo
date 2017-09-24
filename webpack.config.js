var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var UglifyJSPlugin = require('uglifyjs-webpack-plugin')


module.exports = {
    entry: {	
        index : './script/src/tree.js',
        vendor: ['react']
    },
    output: {
        path: path.join(__dirname, 'public/js/'),
        publicPath: '',
       	filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx','style']
    },
    module: {	
	    loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                // presets: [['es2015', {modules:false}], 'stage-3', 'react']
                presets: ['es2015','stage-3', 'react'],
                // plugins: [
                //     'transform-es2015-template-literals',
                //     'transform-es2015-literals',
                //     'transform-es2015-function-name',
                //     'transform-es2015-arrow-functions',
                //     'transform-es2015-block-scoped-functions',
                //     'transform-es2015-classes',
                //     'transform-es2015-object-super',
                //     'transform-es2015-shorthand-properties',
                //     'transform-es2015-computed-properties',
                //     'transform-es2015-for-of',
                //     'transform-es2015-sticky-regex',
                //     'transform-es2015-unicode-regex',
                //     'check-es2015-constants',
                //     'transform-es2015-spread',
                //     'transform-es2015-parameters',
                //     'transform-es2015-destructuring',
                //     'transform-es2015-block-scoping',
                //     'transform-es2015-typeof-symbol',
                //     ['transform-regenerator', { async: false, asyncGenerators: false }],
                // ],
            }
        },{
            test:/\.css$/,
            exclude:/node_modules/,
            loaders:['style','css']
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor',filename: 'vendor.js'}),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'script/templates/backend.html'),
            filename: path.join(__dirname, 'template/backend.html')
        }),
        new UglifyJSPlugin(),
        // new webpack.optimize.UglifyJsPlugin({
        //   beautify: false,
        //   comments: false,
        //   compress: {
        //     warnings: false,
        //     drop_console: true,
        //     collapse_vars: true,
        //     reduce_vars: true
        //   }
        // }),
    ]
}
