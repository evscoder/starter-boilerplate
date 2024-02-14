import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import {
    argvMode,
    styleFileName,
    imageFolderName,
    styles
} from './config.js';
import { $, browser, notifyErr } from './helper.js';
const { src, dest } = gulp;
const preprocSass = gulpSass(dartSass);
const { production } = argvMode.env;
let { minifyCss } = argvMode;
const { pathPrefix } = argvMode.styles;
const styleFilesSources = [styles.entry, styles.components];
const replaceCssPathName = `../${imageFolderName}/`;

if (production && argvMode.cssMinify) {
    minifyCss = true;
}

export default class Styles {
    static stylesRun() {
        return src(styleFilesSources, { base: process.cwd() })
            .pipe($.plumber(notifyErr()))
            .pipe($.newer(styles.dist))
            .pipe($.if(
                argvMode.sourcemaps,
                $.sourcemaps.init(),
                $.if(!minifyCss, $.sourcemaps.init())
            ))
            .pipe($.importify(`${styleFileName}.scss`))
            .pipe(preprocSass({
                outputStyle: 'expanded'
            }).on('error', () => {
                return browser.notify('<strong>FAIL</strong> Sass');
            }))
            .pipe($.autoprefixer())
            .pipe($.replaceTask({
                patterns: [{
                    match: pathPrefix,
                    replacement: replaceCssPathName
                }],
                usePrefix: false
            }))
            .pipe($.concat(`${styleFileName}.css`))
            .pipe($.if(minifyCss, $.cssnano({
                autoprefixer: {
                    remove: false
                },
                discardUnused: false,
                reduceIdents: false,
                zindex: false
            })))
            .pipe($.if(
                argvMode.sourcemaps,
                $.sourcemaps.write('./'),
                $.if(!minifyCss, $.sourcemaps.write('./'))
            ))
            .pipe($.if(!argvMode.cssMinify, $.cssbeautify(argvMode.cssPrettify)))
            .pipe(dest(styles.dist));
    }
}
