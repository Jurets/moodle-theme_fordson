/**
 * Created by Shilling on 11.08.2017.
 */
//alert('HELLO DUCK !!!');

window.onload = function () {
    if (typeof(Event) === 'function') {
        //alert('modern browsers');
        window.dispatchEvent(new Event('resize'));
    } else {
        //alert('IE and other old browsers');
        // causes deprecation warning on modern browsers
        var evt = window.document.createEvent('UIEvents');
        evt.initUIEvent('resize', true, false, window, 0);
        window.dispatchEvent(evt);
    }
};

