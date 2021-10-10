import gulp from 'gulp';
import { reload } from '../helper.js';
import Data from './data.js';
import HTMLPreproc from './html-preproc.js';
const { parallel, series } = gulp;

export default class HTML {
    static tasks() {
        return series(
            Data.dataRun,
            parallel(
                HTMLPreproc.htmlCompile,
                HTMLPreproc.emailsCompile
            )
        );
    }

    static templates() {
        return series(HTMLPreproc.htmlCompile, reload);
    }

    static data() {
        return series(Data.dataRun, reload);
    }

    static emails() {
        return series(HTMLPreproc.emailsCompile, reload);
    }
}
