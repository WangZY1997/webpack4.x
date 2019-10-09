const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const HtmlWebpackPlugin =  require('html-webpack-plugin')
module.exports = {
    entry:'./input.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'test.bundle.js'
    },
    devServer:{
        contentBase:path.join(__dirname,'dist'),
        compress:true,
        port:8080,


    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:"[name].css",
            chunkFilename:'[id].css'
        }),
        new HtmlWebpackPlugin({
            title:'Good Beijing',
            filename:'index.html',
            template:'template.html'
        })
    ],
    module:{
        rules:[
            {
                test:/\.(png|jpg|gif)$/i,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:8192
                        }
                    }
                ]
            },
            {
                test:/\.(m?js|jsx)$/,
                exclude:/(node_modules|bower_components)/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env'],
                        plugins:['@babel/plugin-transform-react-jsx']
                        
                    }
                }
            },
            {
                test:/\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                  ],
            }
        ]
    },
    mode:'development'

}






























// module.exports = {
//     entry:{
//             home:'./home.js',
//             about:'./about.js',
//             other:'./other.js' 
//     },
//     output:{
//         path:path.resolve(__dirname,'dist'),
//         filename:'[name].bundle.js'
//     },
//     mode:"production"
// }