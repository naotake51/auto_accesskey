(function () {
    "use strict";
    /**
     * アクセスキーマーク表示状態
     */
    var display_accesskey = false;
    /**
     * 矢印マーク表示状態
     */
    var display_arrowkey = false;
    /**
     * ページ操作マーク表示状態
     */
    var display_pagekey = false;
    /**
     * 設定の読み込み
     */
    Setting.load();
    /**
     * 設定が変更された場合、再読み込み
     */
    chrome.runtime.onMessage.addListener(function (message, sender, callback) {
        if (message.id === Common.message_passing_ids.change_option) {
            Setting.load();
        }
    });
    /**
     * キーダウンイベント設定
     */
    document.addEventListener("keydown", function (event) {
        if (event.key === "Alt") {
            if (!display_arrowkey) {
                Arrowkey.show(Setting.arrow);
                display_arrowkey = true;
            }
            if (!display_pagekey) {
                Pagekey.show(Setting.page);
                display_pagekey = true;
            }
            if (!display_accesskey) {
                Accesskey.show(Setting.accesskey);
                display_accesskey = true;
            }
            event.preventDefault();
        } else if (event.key === Setting.arrow.up_code) {
            if (display_arrowkey) {
                Scroll.up();
            }
            if (display_accesskey) {
                Accesskey.hide();
                display_accesskey = false;
            }
        } else if (event.key === Setting.arrow.down_code) {
            if (display_arrowkey) {
                Scroll.down();
            }
            if (display_accesskey) {
                Accesskey.hide();
                display_accesskey = false;
            }
        } else if (event.key === Setting.arrow.left_code) {
            if (display_arrowkey) {
                Scroll.left();
            }
            if (display_accesskey) {
                Accesskey.hide();
                display_accesskey = false;
            }
        } else if (event.key === Setting.arrow.right_code) {
            if (display_arrowkey) {
                Scroll.right();
            }
            if (display_accesskey) {
                Accesskey.hide();
                display_accesskey = false;
            }
        } else if (event.key === Setting.page.back_code) {
            if (display_pagekey) {
                window.history.back();
                event.preventDefault();
            }
        } else if (event.key === Setting.page.next_code) {
            if (display_pagekey) {
                window.history.forward();
                event.preventDefault();
            }
        } else if (event.key === Setting.page.new_tab_code) {
            if (display_pagekey) {
                window.open(Setting.new_tab_url);
                event.preventDefault();
            }
        } else if (event.key === Setting.page.delete_tab_code) {
            if (display_pagekey) {
                window.close();
                event.preventDefault();
            }
        } else if (0 <= Setting.accesskey.codes.indexOf(event.key)) {
            Accesskey.select(event.key);
        }
    }, true);
    /**
     * キーアップイベント設定
     */
    document.addEventListener("keyup", function (event) {
        if (event.key === "Alt") {
            if (display_accesskey) {
                Accesskey.hide();
                display_accesskey = false;
            }
            if (display_pagekey) {
                Pagekey.hide();
                display_pagekey = false;
            }
            if (display_arrowkey) {
                Arrowkey.hide();
                display_arrowkey = false;
            }
            event.preventDefault();
        }
    }, true);
})();