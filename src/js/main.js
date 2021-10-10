import 'normalize-css/normalize.css';
import ready from './fn/ready.js';
import imageReady from './fn/images-ready.js';
import { isTouchDevices } from './fn/detected.js';

class App {
    static init() {
        if (isTouchDevices) {
            document.querySelector('html').classList.add('is-touch');
        }

        imageReady(document.querySelector('body'), () => {
            document.querySelector('body').classList.add('load');
        });
    }
}

ready(() => {
    App.init();
});
