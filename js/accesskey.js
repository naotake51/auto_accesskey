"use strict";
var Accesskey = {
    elements: [], //accesskeyを設定したelement
    accesskey_marks: [], //accesskeyを設定したことを可視化したマーク
    // accesskey設定および、可視化
    show: function (setting) {
        // アクセスキー設定対象取得
        var elements = Accesskey.target();
        elements = elements.slice(0, setting.accesskey_codes.length);
        elements.forEach(function (element, index) {
            // アクセスキー設定
            element.setAttribute("accesskey", setting.accesskey_codes[index]);
            Accesskey.elements.push(element);
            // アクセスキー可視化
            var rect = element.getBoundingClientRect();
            var mark = Mark.accesskey_mark({
                top: rect.top + window.pageYOffset,
                left: rect.left + window.pageXOffset,
                size: Math.min(rect.height, rect.width, 32),
                label: setting.accesskey_codes[index]
            });
            document.body.appendChild(mark);
            Accesskey.accesskey_marks.push(mark);
        });
    },
    // accesskey削除、mark削除
    hide: function () {
        // アクセスキー削除
        Accesskey.elements.forEach(function (element) {
            element.removeAttribute("accesskey");
        });
        Accesskey.elements = [];
        // アクセスキー可視化マーク削除
        Accesskey.accesskey_marks.forEach(function (mark) {
            mark.parentNode.removeChild(mark);
        });
        Accesskey.accesskey_marks = [];
    },
    target: function () {
        var elements = Array.from(document.querySelectorAll("*"));
        elements = elements.filter(Accesskey.display_element);
        elements = elements.sort(function (a, b) {
            var a_rect = a.getBoundingClientRect();
            var b_rect = b.getBoundingClientRect();
            return a_rect.top - b_rect.top;
        });
        return elements;
    },
    display_element: function (element) {
        // 要素の種類
        if (0 <= ["INPUT", "A", "BUTTON", "IMG", "TEXTAREA", "OPTION", "H1", "H2", "H3", ].indexOf(element.tagName)) {;;
        } else {
            // if (element.onclick === null) {
            return false;
            // }
        }
        // 画面表示有無
        var rect = element.getBoundingClientRect();
        var points = [
            [0 / 4, 0 / 4],
            [0 / 4, 1 / 4],
            [0 / 4, 2 / 4],
            [0 / 4, 3 / 4],
            [0 / 4, 4 / 4],
            [1 / 4, 0 / 4],
            [1 / 4, 1 / 4],
            [1 / 4, 2 / 4],
            [1 / 4, 3 / 4],
            [1 / 4, 4 / 4],
            [2 / 4, 0 / 4],
            [2 / 4, 1 / 4],
            [2 / 4, 2 / 4],
            [2 / 4, 3 / 4],
            [2 / 4, 4 / 4],
            [3 / 4, 0 / 4],
            [3 / 4, 1 / 4],
            [3 / 4, 2 / 4],
            [3 / 4, 3 / 4],
            [3 / 4, 4 / 4],
            [4 / 4, 0 / 4],
            [4 / 4, 1 / 4],
            [4 / 4, 2 / 4],
            [4 / 4, 3 / 4],
            [4 / 4, 4 / 4],
        ];
        var display = false;
        for (var point of points) {
            var x = rect.left + (rect.width * point[0]);
            var y = rect.top + (rect.height * point[1]);
            var display_element = document.elementFromPoint(x, y);
            if (display_element === element) {
                display = true;
                break;
            }
        }
        if (display === false) {
            return false;
        }
        return true;
    },
    select: function (code) {
        for (var accesskey_mark of Accesskey.accesskey_marks) {
            if (accesskey_mark.innerText === code) {
                accesskey_mark.classList.add("select");
                setTimeout(function () {
                    accesskey_mark.classList.remove("select")
                }, 300);
                break;
            }
        }
    }
}