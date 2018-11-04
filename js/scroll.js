"use strict";
var Scroll = {
    /**
     * 上スクロール
     */
    up: function () {
        for (var i = 0; i < 50; i++) {
            window.scrollBy(0, -1);
        }
    },
    /**
     * 下スクロール
     */
    down: function () {
        for (var i = 0; i < 50; i++) {
            window.scrollBy(0, 1);
        }
    },
    /**
     * 左スクロール
     */
    left: function () {
        for (var i = 0; i < 50; i++) {
            window.scrollBy(-1, 0);
        }
    },
    /**
     * 右スクロール
     */
    right: function () {
        for (var i = 0; i < 50; i++) {
            window.scrollBy(1, 0);
        }
    },
}