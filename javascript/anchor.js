window.onload = function () {
    
    var linkNav = document.querySelectorAll('[href*="#section-"]'),
        V = 2; // скорость
    for (var i = 0; i < linkNav.length; i++) {
        linkNav[i].onclick = function () {
            var w = window.pageYOffset, hashElem = this.href.toString().indexOf('#'),
                hash = this.href.slice(hashElem),
                t = document.querySelector(hash).getBoundingClientRect().top,
                head = document.querySelector('header[role="banner"]').offsetHeight,
                start = null;
            requestAnimationFrame(step);
            function step(time) {
                if (start === null) start = time;
                var progress = time - start,
                    r = (t <= head ? Math.max(w - progress / V, w + t - head) : Math.min(w + progress / V, w + t - head));
                window.scrollTo(0, r);
                if (r != w + t) {
                    requestAnimationFrame(step)
                } else {
                    location.hash = hash
                }
            }

            return false;
        }
    }

};