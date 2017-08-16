/**
 * Created by Shilling on 11.08.2017.
 */

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

        //var contentElem = document.getElementById('region-main');
        //var computedStyle = getComputedStyle(contentElem);
        //alert(computedStyle.width );

        // added by Yulia on 16/08/2017
        var thisElem = document.querySelector('#region-main'),
            thisParent = thisElem.parentElement,
            allChildren = thisParent.children,
            thisParentWidth = thisParent.offsetWidth,
            allChildrenWidth = 0,
            thisElWidth;

        for (var i = 0; i < allChildren.length; i++) {
            if(allChildren[i] !== thisElem) {
                allChildrenWidth += allChildren[i].offsetWidth;
            }
        }

        thisElWidth = thisParentWidth - allChildrenWidth;
        thisElem.style.width = thisElWidth - 60 +'px';
    }
};

