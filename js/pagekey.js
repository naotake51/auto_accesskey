"use strict";
var Pagekey = {
    /**
     * 表示中戻るマーク
     */
    back_mark: null,
    /**
     * 表示中進むマーク
     */
    next_mark: null,
    /**
     * 表示中タブ新規マーク
     */
    new_tab_mark: null,
    /**
     * 表示中タブ削除マーク
     */
    delete_tab_mark: null,
    /**
     * ページ操作マーク表示
     * @param {object} setting - 設定
     */
    show: function (setting) {
        // 戻るマーク追加
        if (setting.back_code !== null) {
            Pagekey.back_mark = Mark.back_mark(setting.back_code);
            document.body.appendChild(Pagekey.back_mark);
        }
        // 進むマーク追加
        if (setting.next_code !== null) {
            Pagekey.next_mark = Mark.next_mark(setting.next_code);
            document.body.appendChild(Pagekey.next_mark);
        }
        // タブ新規マーク追加
        if (setting.new_tab_code !== null) {
            Pagekey.new_tab_mark = Mark.new_tab_mark(setting.new_tab_code);
            document.body.appendChild(Pagekey.new_tab_mark);
        }
        // タブ削除マーク追加
        if (setting.delete_tab_code !== null) {
            Pagekey.delete_tab_mark = Mark.delete_tab_mark(setting.delete_tab_code);
            document.body.appendChild(Pagekey.delete_tab_mark);
        }
    },
    /**
     * ページ操作マーク非表示
     */
    hide: function () {
        // 戻るマーク削除
        if (Pagekey.back_mark !== null) {
            Pagekey.back_mark.parentNode.removeChild(Pagekey.back_mark);
            Pagekey.back_mark = null;
        }
        // 進むマーク削除
        if (Pagekey.next_mark !== null) {
            Pagekey.next_mark.parentNode.removeChild(Pagekey.next_mark);
            Pagekey.next_mark = null;
        }
        // タブ新規マーク削除
        if (Pagekey.new_tab_mark !== null) {
            Pagekey.new_tab_mark.parentNode.removeChild(Pagekey.new_tab_mark);
            Pagekey.new_tab_mark = null;
        }
        // タブ削除マーク削除
        if (Pagekey.delete_tab_mark !== null) {
            Pagekey.delete_tab_mark.parentNode.removeChild(Pagekey.delete_tab_mark);
            Pagekey.delete_tab_mark = null;
        }
    },
}