import gulp from 'gulp';
import { webpackConfig } from '../webpack/webpack.config.js';
import * as config from './config.js';
import { $, notifyErr } from './helper.js';
const { src, dest } = gulp;
const { entry } = config.webpackPath;

export default class Scripts {
    static run() {
        const entryPaths = [];

        Object.entries(entry).forEach(([, value]) => entryPaths.push(value));

        return src(entryPaths)
            .pipe($.plumber(notifyErr()))
            .pipe($.webpackStream(webpackConfig))
            .pipe(dest(webpackConfig.output.path));
    }
}
