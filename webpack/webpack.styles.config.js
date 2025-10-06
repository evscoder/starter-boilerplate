import path from 'path';
import { fileURLToPath } from 'url';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import { argvMode, stylesPath, webpackPath } from '../gulp/config.js';
const { production } = argvMode.env;

const dirname = path.dirname(fileURLToPath(import.meta.url));
const sourceMap = argvMode.sourcemaps ? true : !production;
let devtool;

if (argvMode.sourcemaps) {
    devtool = 'source-map';
} else if (production) {
    devtool = false;
} else {
    devtool = 'source-map';
}

export const stylesConfig = {
    mode: production ? 'production' : 'development',
    devtool,
    performance: {
        hints: false
    },
    stats: {
        all: false,
        errors: true,
        warnings: true,
        errorsCount: true,
        timings: true,
        errorDetails: false
    },
    infrastructureLogging: {
        level: 'none'
    },
    entry: stylesPath.entry,
    output: {
        path: path.resolve(dirname, stylesPath.dist),
        publicPath: stylesPath.dist,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap,
                            sassOptions: {
                                quietDeps: true
                            }
                        }
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: '../img/content/[name][ext]',
                    publicPath: ''
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: '../fonts/[name][ext]',
                    publicPath: ''
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/[name].css'
        })
    ],
    optimization: {
        minimize: production,
        minimizer: production ? [
            '...',
            new CssMinimizerPlugin()
        ] : []
    }
};
