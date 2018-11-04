"use strict";
var Arrowkey = {
    up_mark: null,
    down_mark: null,
    left_mark: null,
    right_mark: null,
    show: function (setting) {
        if (setting.up_code !== null) {
            Accesskey.up_mark = Mark.up_mark(setting.up_code);
            document.body.appendChild(Accesskey.up_mark);
        }
        if (setting.down_code !== null) {
            Accesskey.down_mark = Mark.down_mark(setting.down_code);
            document.body.appendChild(Accesskey.down_mark);
        }
        if (setting.left_code !== null) {
            Accesskey.left_mark = Mark.left_mark(setting.left_code);
            document.body.appendChild(Accesskey.left_mark);
        }
        if (setting.right_code !== null) {
            Accesskey.right_mark = Mark.right_mark(setting.right_code);
            document.body.appendChild(Accesskey.right_mark);
        }
    },
    hide: function () {
        if (Accesskey.up_mark !== null) {
            Accesskey.up_mark.parentNode.removeChild(Accesskey.up_mark);
            Accesskey.up_mark = null;
        }
        if (Accesskey.down_mark !== null) {
            Accesskey.down_mark.parentNode.removeChild(Accesskey.down_mark);
            Accesskey.down_mark = null;
        }
        if (Accesskey.left_mark !== null) {
            Accesskey.left_mark.parentNode.removeChild(Accesskey.left_mark);
            Accesskey.left_mark = null;
        }
        if (Accesskey.right_mark !== null) {
            Accesskey.right_mark.parentNode.removeChild(Accesskey.right_mark);
            Accesskey.right_mark = null;
        }
    },
}