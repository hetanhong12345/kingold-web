const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let resolve = (dir) => {
    return path.join(__dirname, '..', dir)
}


module.exports = (env = 'dev') => {
    const config = {
        entry: {
            'polyfill': 'babel-polyfill',
            'ventor': ['vue', 'vue-router', 'vuex', 'axios'],
            'crypto': ['crypto-js/core', 'crypto-js/aes',
                'crypto-js/enc-utf8', 'crypto-js/enc-hex',
                'crypto-js/enc-base64', 'crypto-js/pad-zeropadding',
                'crypto-js/enc-latin1','md5'],
            'main': './src/main.js'
        },
        output: {
            path: path.resolve('./dist'),
            filename: '[name].js',
            chunkFilename: '[id].chunk.js',
            publicPath: '/dist/'
        },
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                '@': resolve('src'),
                'vue$': 'vue/dist/vue.esm.js'
            }
        },
        module: {
            rules: [
                {
                    test: /\.(js|vue)$/,
                    enforce: 'pre',
                    exclude: [/node_modules/],
                    use: {
                        loader: 'eslint-loader',
                        options: {
                            formatter: require('eslint-friendly-formatter')
                        }
                    },

                },
                {
                    test: /\.vue$/,
                    use: {
                        loader: 'vue-loader',
                        options: {
                            // ...
                            postcss: [require('precss'),
                                require('autoprefixer')({browsers: ['last 2 versions', 'iOS 7']})]
                        }
                    },
                },
                {
                    test: /\.js$/,
                    use: 'babel-loader'
                },
                {
                    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                    use: {
                        loader: 'url-loader',
                        options: {
                            limit: 1000,
                            name: '[name].[hash:8].[ext]'
                        }
                    }

                },
                {
                    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                    use: {
                        loader: 'url-loader',
                        options: {
                            limit: 1000,
                            name: '[name].[hash:8].[ext]'

                        }
                    }
                },
                {
                    test: /\.less$/,
                    use: [
                        {
                            loader: 'style-loader',
                        },
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'postcss-loader',
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                modules: false
                            }
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: 'style-loader',
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: false
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                modules: false
                            }
                        }
                    ]


                }
            ]
        },
        optimization: {
            splitChunks: {
                minSize: 30000,
                minChunks: 2,
                maxAsyncRequests: 5,
                maxInitialRequests: 3,
                automaticNameDelimiter: '~',
                name: true,
                cacheGroups: {
                    one: {
                        test: 'polyfill',
                        name: 'polyfill',
                        chunks: 'initial'
                    },
                    tow: {
                        test: 'ventor',
                        name: "ventor",
                        chunks: 'initial'
                    },
                    three: {
                        test: 'crypto',
                        name: "crypto",
                        chunks: 'initial'
                    }

                }
            }

        },

        plugins: [
            new CleanWebpackPlugin(['./dist', './html']),
            new HtmlWebpackPlugin({
                title: '金疙瘩-中冀投资旗下智能定制理财平台',
                favicon: './src/images/logo-icon.png',
                chunks: ['polyfill', 'ventor', 'crypto', 'main'],
                inject: 'body',
                filename: path.resolve(__dirname, 'html/index.html'),
                template: './index.ejs',
                minify: {//压缩HTML文件
                    removeComments: true,    //移除HTML中的注释
                    collapseWhitespace: true    //删除空白符与换行符
                }
            }),
        ],
        devtool: '#eval-source-map'
    }
    if (env == 'production' || env == 'stage' || env == 'test') {
        console.log('------->', env)
        config.devtool = '';
        config.mode = 'production';
        config.output.filename = `[name].[chunkhash:8].js`;
        config.output.chunkFilename = `[name].[chunkhash:8].js`;
        config.plugins = (config.plugins || []).concat([
            new webpack.DefinePlugin({
                'process.env': {
                    'kingold': JSON.stringify(env)
                }
            }),
            new webpack.HashedModuleIdsPlugin({
                hashFunction: 'sha256',
                hashDigest: 'hex',
                hashDigestLength: 20
            })

        ]);
    } else {
        console.log('dev');
    }
    return config
};
