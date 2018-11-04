"use strict";
var Setting = {
    accesskey_codes: [], //accesskeyを設定に使用可能なアルファベットリスト
    up_code: null,
    down_code: null,
    left_code: null,
    right_code: null,
    back_code: null,
    next_code: null,
    new_tab_code: null,
    delete_tab_code: null,
    new_tab_url: "https://www.google.co.jp",
    // オプション読み込み
    load: function () {
        chrome.storage.sync.get(Common.default_option, function (saved_options) {
            Setting.set(saved_options);
        });
    },
    // オプション設定
    set: function (options) {
        var option_accesskeys = Object.values(options);
        var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
            "r", "s", "t", "u", "v", "w", "y", "z"
        ];
        Setting.accesskey_codes = alphabet.filter(function (char) {
            return option_accesskeys.indexOf(char) === -1;
        });
        Setting.up_code = options["scroll-up"] !== "" ? options["scroll-up"] : null;
        Setting.down_code = options["scroll-down"] !== "" ? options["scroll-down"] : null;
        Setting.left_code = options["scroll-left"] !== "" ? options["scroll-left"] : null;
        Setting.right_code = options["scroll-right"] !== "" ? options["scroll-right"] : null;
        Setting.back_code = options["back"] !== "" ? options["back"] : null;
        Setting.next_code = options["next"] !== "" ? options["next"] : null;
        Setting.new_tab_code = options["new-tab"] !== "" ? options["new-tab"] : null;
        Setting.delete_tab_code = options["delete-tab"] !== "" ? options["delete-tab"] : null;
    }
}