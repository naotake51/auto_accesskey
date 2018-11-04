(function () {
    "use strict";
    var display_accesskey = false;
    var display_arrowkey = false;
    var display_pagekey = false;
    // 設定の読み込み
    Setting.load();
    // 設定が変更された場合
    chrome.runtime.onMessage.addListener(function (message, sender, callback) {
        if (message.id === Common.message_passing_ids.change_option) {
            Setting.load();
        }
    });
    document.addEventListener("keydown", function (event) {
        console.log(event.key);
        if (event.key === "Alt") {
            if (!display_arrowkey) {
                Arrowkey.show(Setting);
                display_arrowkey = true;
            }
            if (!display_pagekey) {
                Pagekey.show(Setting);
                display_pagekey = true;
            }
            if (!display_accesskey) {
                Accesskey.show(Setting);
                display_accesskey = true;
            }
            event.preventDefault();
        } else if (event.key === Setting.up_code) {
            if (display_arrowkey) {
                Scroll.up();
            }
            if (display_accesskey) {
                Accesskey.hide();
                display_accesskey = false;
            }
        } else if (event.key === Setting.down_code) {
            if (display_arrowkey) {
                Scroll.down();
            }
            if (display_accesskey) {
                Accesskey.hide();
                display_accesskey = false;
            }
        } else if (event.key === Setting.left_code) {
            if (display_arrowkey) {
                Scroll.left();
            }
            if (display_accesskey) {
                Accesskey.hide();
                display_accesskey = false;
            }
        } else if (event.key === Setting.right_code) {
            if (display_arrowkey) {
                Scroll.right();
            }
            if (display_accesskey) {
                Accesskey.hide();
                display_accesskey = false;
            }
        } else if (event.key === Setting.back_code) {
            if (display_pagekey) {
                window.history.back();
                event.preventDefault();
            }
        } else if (event.key === Setting.next_code) {
            if (display_pagekey) {
                window.history.forward();
                event.preventDefault();
            }
        } else if (event.key === Setting.new_tab_code) {
            if (display_pagekey) {
                window.open(Setting.new_tab_url);
                event.preventDefault();
            }
        } else if (event.key === Setting.delete_tab_code) {
            if (display_pagekey) {
                window.close();
                event.preventDefault();
            }
        } else if (0 <= Setting.accesskey_codes.indexOf(event.key)) {
            Accesskey.select(event.key);
        }
    }, true);
    document.addEventListener("keyup", function (event) {
        console.log(event.key);
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