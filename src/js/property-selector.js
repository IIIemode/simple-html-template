const Dispatcher = $('#choiceForm')[0]; 

export default class PropertySelector {
    constructor(el) {
        this.el = el;

        this.el.on('click', ev => {
            const type = ev.target.dataset['type'];
            const value = ev.target.dataset['value'];

            this.dispatchEvent(type, value);
        });
    }
    dispatchEvent(type, value) {

        const event = new $(Dispatcher).triggerHandler('property-selected', {
            detail: {
                type: type,
                value: value
            }
        });
        
        Dispatcher.dispatchEvent(event);
    }
}
