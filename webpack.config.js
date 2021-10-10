import path from 'path';
import { fileURLToPath } from 'url';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { argvMode, webpackPath } from './gulp/config.js';
const dirname = path.dirname(fileURLToPath(import.meta.url));
const { production } = argvMode.env;
const devTool = production ? false : 'source-map';

const webpackConfig = {
    mode: production ? 'production' : 'development',
    devtool: argvMode.sourcemaps ? 'source-map' : devTool,
    entry: webpackPath.entry,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }, {
                        loader: 'eslint-loader'
                    }
                ]
            }, {
                test: /\.css$/,
                exclude: [
                    path.resolve(dirname, './src/components/'),
                    path.resolve(dirname, './src/styles/')
                ],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                url: false,
                                minimize: true,
                                sourceMap: false
                            }
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename(getPath) {
                return getPath('../css/[name].css');
            },
            allChunks: true
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    test: /node_modules/,
                    name: 'vendor',
                    enforce: true
                }
            }
        }
    },
    output: {
        path: path.resolve(dirname, webpackPath.output),
        publicPath: webpackPath.output,
        filename: '[name].js'
    },
    resolve: {
        alias: {
            jquery: 'jquery/src/jquery'
        }
    }
};

export {
    webpackConfig
};
