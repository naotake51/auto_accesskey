"use strict";
var Arrowkey = {
    /**
     * 表示中上矢印マーク
     */
    up_mark: null,
    /**
     * 表示中下矢印マーク
     */
    down_mark: null,
    /**
     * 表示中左矢印マーク
     */
    left_mark: null,
    /**
     * 表示中右矢印マーク
     */
    right_mark: null,
    /**
     * 矢印マーク表示
     * @param {object} setting - 設定
     */
    show: function (setting) {
        // 上矢印マーク追加
        if (setting.up_code !== null) {
            Accesskey.up_mark = Mark.up_mark(setting.up_code);
            document.body.appendChild(Accesskey.up_mark);
        }
        // 下矢印マーク追加
        if (setting.down_code !== null) {
            Accesskey.down_mark = Mark.down_mark(setting.down_code);
            document.body.appendChild(Accesskey.down_mark);
        }
        // 左矢印マーク追加
        if (setting.left_code !== null) {
            Accesskey.left_mark = Mark.left_mark(setting.left_code);
            document.body.appendChild(Accesskey.left_mark);
        }
        // 右矢印マーク追加
        if (setting.right_code !== null) {
            Accesskey.right_mark = Mark.right_mark(setting.right_code);
            document.body.appendChild(Accesskey.right_mark);
        }
    },
    /**
     * 矢印マーク非表示
     */
    hide: function () {
        // 上矢印マーク削除
        if (Accesskey.up_mark !== null) {
            Accesskey.up_mark.parentNode.removeChild(Accesskey.up_mark);
            Accesskey.up_mark = null;
        }
        // 下矢印マーク削除
        if (Accesskey.down_mark !== null) {
            Accesskey.down_mark.parentNode.removeChild(Accesskey.down_mark);
            Accesskey.down_mark = null;
        }
        // 左矢印マーク削除
        if (Accesskey.left_mark !== null) {
            Accesskey.left_mark.parentNode.removeChild(Accesskey.left_mark);
            Accesskey.left_mark = null;
        }
        // 右矢印マーク削除
        if (Accesskey.right_mark !== null) {
            Accesskey.right_mark.parentNode.removeChild(Accesskey.right_mark);
            Accesskey.right_mark = null;
        }
    },
}