const isTouchDevices = ('ontouchstart' in window) || (window.DocumentTouch && document instanceof window.DocumentTouch);
const isMobilePlatform = /iPhone|Android|blackberry|windows phone|IEMobile|Opera Mini/i.test(navigator.userAgent);

export {
    isTouchDevices,
    isMobilePlatform
};
