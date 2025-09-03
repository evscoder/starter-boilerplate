import 'normalize-css/normalize.css';
import 'animate.css';
import '../tailwind.css';
import '../styles.scss';

import {
    isMobilePlatform,
    isPlatformIOS,
    isTouchDevices
} from './fn/detected.js';

class App {
    constructor() {
        this.setDetected();
        this.init();
    }

    setDetected() {
        if (isTouchDevices) {
            document.documentElement.classList.add('is-touch');
        }

        if (isMobilePlatform) {
            document.documentElement.classList.add('is-mobile-platform');
        }

        if (isPlatformIOS) {
            document.documentElement.classList.add('ios');
        }
    }

    onLoaded = () => {
        document.body.classList.add('load');
    };

    onReady = () => {
        window.addEventListener('load', this.onLoaded);
    };

    init() {
        document.addEventListener('DOMContentLoaded', this.onReady);
    }

    dispose() {

    }
}

const app = new App();
