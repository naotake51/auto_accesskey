"use strict";
var Setting = {
    /**
     * アクセスキー設定
     */
    accesskey: {
        codes: [], //キー文字リスト
    },
    /**
     * 矢印設定
     */
    arrow: {
        up_code: null, //上矢印キー文字
        down_code: null, //下矢印キー文字
        left_code: null, //左矢印キー文字
        right_code: null, //右矢印キー文字
    },
    /**
     * ページ操作設定
     */
    page: {
        back_code: null, //戻るキー文字
        next_code: null, //進むキー文字
        new_tab_code: null, //タブ新規キー文字
        new_tab_url: "https://www.google.co.jp", //新規タブURL
        delete_tab_code: null, //タブ削除キー文字
    },
    /**
     * 設定読み込み
     */
    load: function () {
        chrome.storage.sync.get(Common.default_option, function (saved_options) {
            Setting.set(saved_options);
        });
    },
    /**
     * 設定読み込み
     * @param {object} options - 設定
     */
    set: function (options) {
        // アクセスキー設定
        var option_accesskeys = Object.values(options);
        var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
            "r", "s", "t", "u", "v", "w", "y", "z"
        ];
        Setting.accesskey.codes = alphabet.filter(function (char) {
            return option_accesskeys.indexOf(char) === -1;
        });
        // 矢印設定
        Setting.arrow.up_code = options["scroll-up"] !== "" ? options["scroll-up"] : null;
        Setting.arrow.down_code = options["scroll-down"] !== "" ? options["scroll-down"] : null;
        Setting.arrow.left_code = options["scroll-left"] !== "" ? options["scroll-left"] : null;
        Setting.arrow.right_code = options["scroll-right"] !== "" ? options["scroll-right"] : null;
        // ページ操作設定
        Setting.page.back_code = options["back"] !== "" ? options["back"] : null;
        Setting.page.next_code = options["next"] !== "" ? options["next"] : null;
        Setting.page.new_tab_code = options["new-tab"] !== "" ? options["new-tab"] : null;
        Setting.page.delete_tab_code = options["delete-tab"] !== "" ? options["delete-tab"] : null;
    }
}