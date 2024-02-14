import path from 'path';
import { fileURLToPath } from 'url';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import { argvMode, webpackPath } from './gulp/config.js';
const dirname = path.dirname(fileURLToPath(import.meta.url));
const { production } = argvMode.env;
const devTool = production ? false : 'source-map';
const rules = [{
    test: /\.css$/,
    exclude: [
        path.resolve(dirname, './src/components/'),
        path.resolve(dirname, './src/styles/')
    ],
    use: [MiniCssExtractPlugin.loader, 'css-loader']
}];

if (argvMode.typeScript) {
    rules.push({
        test: /\.ts?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
    });
} else {
    rules.push({
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        ]
    });
}

const webpackConfig = {
    mode: production ? 'production' : 'development',
    devtool: argvMode.sourcemaps ? 'source-map' : devTool,
    entry: webpackPath.entry,
    module: {
        rules
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/[name].css'
        }),
        new ESLintPlugin()
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
        },
        minimize: production,
        minimizer: production ? [
            '...',
            new CssMinimizerPlugin()
        ] : []
    },
    output: {
        path: path.resolve(dirname, webpackPath.output),
        publicPath: webpackPath.output,
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {}
    }
};

export {
    webpackConfig
};
