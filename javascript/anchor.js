//polyfill for old browsers
window.requestAnimationFrame = window.requestAnimationFrame || function(C) { return setTimeout(function() { C(+new Date()) }, 30) };

//Smooth scroll to anchor
window.onload = function () {
    var linkNav = document.querySelectorAll('[href*="#section-"]'),
            V = 1; // speed
        for (var i = 0; i < linkNav.length; i++) {
          linkNav[i].onclick = function(){
            var windScroll = window.pageYOffset,
                hashElem = this.href.toString().indexOf('#'),
                hash = this.href.slice(hashElem),
                topOfElem = document.querySelector(hash).getBoundingClientRect().top,
                headerHeigtn = document.querySelector('header[role="banner"]').offsetHeight,
                start = null;
            requestAnimationFrame(step);
            function step(time) {
              if (start === null) start = time;
              var progress = time - start,
                  scrollToEl = (topOfElem <= headerHeigtn ? Math.max(windScroll - progress/V, windScroll + topOfElem - headerHeigtn) : Math.min(windScroll + progress/V, windScroll + topOfElem - headerHeigtn));
              window.scrollTo(0,scrollToEl);
              if (scrollToEl != windScroll + topOfElem - headerHeigtn) {requestAnimationFrame(step)}
            }
            return false;
        }
    }
 };