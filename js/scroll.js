"use strict";
var Scroll = {
    up: function () {
        for (var i = 0; i < 50; i++) {
            window.scrollBy(0, -1);
        }
    },
    down: function () {
        for (var i = 0; i < 50; i++) {
            window.scrollBy(0, 1);
        }
    },
    left: function () {
        for (var i = 0; i < 50; i++) {
            window.scrollBy(-1, 0);
        }
    },
    right: function () {
        for (var i = 0; i < 50; i++) {
            window.scrollBy(1, 0);
        }
    },
}