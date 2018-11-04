"use strict";
var Accesskey = {
    /**
     * アクセスキーを設定したDOM
     */
    elements: [],
    /**
     * 表示中アクセスキーマーク
     */
    accesskey_marks: [],
    /**
     * アクセスキーマーク表示、アクセスキー設定
     * @param {object} setting - 設定
     */
    show: function (setting) {
        // アクセスキー設定対象DOM取得
        var elements = Accesskey.target();
        elements = elements.slice(0, setting.codes.length);

        elements.forEach(function (element, index) {
            // アクセスキー設定
            element.setAttribute("accesskey", setting.codes[index]);
            Accesskey.elements.push(element);
            // アクセスキーマーク追加
            var rect = element.getBoundingClientRect();
            var mark = Mark.accesskey_mark({
                top: rect.top + window.pageYOffset,
                left: rect.left + window.pageXOffset,
                size: Math.min(rect.height, rect.width, 32),
                label: setting.codes[index]
            });
            document.body.appendChild(mark);
            Accesskey.accesskey_marks.push(mark);
        });
    },
    /**
     * アクセスキーマーク非表示、アクセスキー設定削除
     * @param {object} setting - 設定
     */
    hide: function () {
        // アクセスキー削除
        Accesskey.elements.forEach(function (element) {
            element.removeAttribute("accesskey");
        });
        Accesskey.elements = [];
        // アクセスキーマーク削除
        Accesskey.accesskey_marks.forEach(function (mark) {
            mark.parentNode.removeChild(mark);
        });
        Accesskey.accesskey_marks = [];
    },
    /**
     * アクセスキー設定対象DOM取得
     * @return {array} elements - 設定対象DOMのリスト
     */
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
    /**
     * アクセスキー設定対象DOM判定
     * @param {object} element - DOM
     * @return {boolean} - 判定結果
     */
    display_element: function (element) {
        // 要素の種類
        if (0 <= ["INPUT", "A", "BUTTON", "IMG", "TEXTAREA", "OPTION", "H1", "H2", "H3", ].indexOf(element.tagName)) {;;
        } else {
            return false;
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
    /**
     * アクセスキーマークの選択アニメーション
     * @param {string} code - 選択されたキー文字
     */
    select: function (code) {
        for (var accesskey_mark of Accesskey.accesskey_marks) {
            if (accesskey_mark.innerText === code) {
                // アニメーション用クラス追加
                accesskey_mark.classList.add("select");
                // アニメーション用クラス削除登録
                setTimeout(function () {
                    accesskey_mark.classList.remove("select")
                }, 300);
                break;
            }
        }
    }
}