import gulp from 'gulp';
import * as config from './config.js';
import { $, notifyErr } from './helper.js';
import { stylesConfig } from '../webpack/webpack.styles.config.js';
import { webpackConfig } from '../webpack/webpack.config.js';
const { src, dest } = gulp;
const { entry } = config.webpackPath;

const getEntryPaths = () => {
    const entryPaths = [];

    Object.entries(entry).forEach(([, value]) => entryPaths.push(value));

    return entryPaths;
};

export default class Scripts {
    static styles() {
        return src(getEntryPaths())
            .pipe($.plumber(notifyErr()))
            .pipe($.webpackStream(stylesConfig))
            .pipe(dest(stylesConfig.output.path));
    }

    static run() {
        return src(getEntryPaths())
            .pipe($.plumber(notifyErr()))
            .pipe($.webpackStream(webpackConfig))
            .pipe(dest(webpackConfig.output.path));
    }
}
