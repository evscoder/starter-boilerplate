import 'normalize-css/normalize.css';
import imageReady from './fn/images-ready.js';
import {
    isMobilePlatform,
    isPlatformIOS,
    isTouchDevices
} from './fn/detected.js';

class App {
    constructor() {
        this.onReady = this.onReady.bind(this);
        this.onImageReady = this.onImageReady.bind(this);
        this.setDetected();
        this.init();
    }

    setDetected() {
        if (isTouchDevices) {
            document.querySelector('html').classList.add('is-touch');
        }

        if (isMobilePlatform) {
            document.querySelector('html').classList.add('is-mobile-platform');
        }

        if (isPlatformIOS) {
            document.querySelector('html').classList.add('ios');
        }
    }

    onImageReady() {
        document.body.classList.add('load');
    }

    onReady() {
        imageReady(document.body, this.onImageReady);
    }

    init() {
        document.addEventListener('DOMContentLoaded', this.onReady);
    }

    dispose() {

    }
}

const app = new App();
