const triggerEvent = (typeEvent, elem, bubbles = true) => {
    let event;

    if (typeEvent === 'click') {
        event = new MouseEvent('click', {
            bubbles,
            cancelable: true,
            view: window
        });

        elem.dispatchEvent(event);
    }
};

export default triggerEvent;
