"use strict";
var Pagekey = {
    back_mark: null,
    next_mark: null,
    new_tab_mark: null,
    show: function (setting) {
        if (setting.back_code !== null) {
            Pagekey.back_mark = Mark.back_mark(setting.back_code);
            document.body.appendChild(Pagekey.back_mark);
        }
        if (setting.next_code !== null) {
            Pagekey.next_mark = Mark.next_mark(setting.next_code);
            document.body.appendChild(Pagekey.next_mark);
        }
        if (setting.new_tab_code !== null) {
            Pagekey.new_tab_mark = Mark.new_tab_mark(setting.new_tab_code);
            document.body.appendChild(Pagekey.new_tab_mark);
        }
        if (setting.delete_tab_code !== null) {
            Pagekey.delete_tab_mark = Mark.delete_tab_mark(setting.delete_tab_code);
            document.body.appendChild(Pagekey.delete_tab_mark);
        }
    },
    hide: function () {
        if (Pagekey.back_mark !== null) {
            Pagekey.back_mark.parentNode.removeChild(Pagekey.back_mark);
            Pagekey.back_mark = null;
        }
        if (Pagekey.next_mark !== null) {
            Pagekey.next_mark.parentNode.removeChild(Pagekey.next_mark);
            Pagekey.next_mark = null;
        }
        if (Pagekey.new_tab_mark !== null) {
            Pagekey.new_tab_mark.parentNode.removeChild(Pagekey.new_tab_mark);
            Pagekey.new_tab_mark = null;
        }
        if (Pagekey.delete_tab_mark !== null) {
            Pagekey.delete_tab_mark.parentNode.removeChild(Pagekey.delete_tab_mark);
            Pagekey.delete_tab_mark = null;
        }
    },
}