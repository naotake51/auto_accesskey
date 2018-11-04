"use strict";
var Mark = {
    accesskey_mark: function (prop) {
        var mark = document.createElement("div");
        mark.innerText = prop.label;
        mark.classList.add("accesskey-mark");
        mark.classList.add(prop.label);
        var style = {
            // 絶対位置指定
            position: "absolute",
            top: prop.top + "px",
            left: prop.left + "px",
            // 重なり
            zIndex: "2147483647",
            // テキスト中央
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // 余白
            padding: "0",
            margin: "0",
            // サイズ
            height: prop.size + "px",
            width: prop.size + "px",
            fontSize: (prop.size * 0.8) + "px",
            // 色
            color: "white",
            backgroundColor: "black",
            // ボーダー
            border: "none 0 black",
            borderRadius: (prop.size / 8) + "px",
        };
        for (var p in style) {
            if (style.hasOwnProperty(p)) {
                mark.style[p] = style[p];
            }
        }
        return mark;
    },
    up_mark: function (code) {
        var mark = document.createElement("div");
        mark.className = "arrow-mark arrow-up-mark";
        mark.innerText = code;
        var style = {
            // 絶対位置指定
            position: "fixed",
            top: "0",
            // bottom: "0",
            left: "0",
            right: "0",
        };
        for (var p in style) {
            if (style.hasOwnProperty(p)) {
                mark.style[p] = style[p];
            }
        }
        return mark;
    },
    down_mark: function (code) {
        var mark = document.createElement("div");
        mark.className = "arrow-mark arrow-down-mark";
        mark.innerText = code;
        var style = {
            // 絶対位置指定
            position: "fixed",
            // top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        };
        for (var p in style) {
            if (style.hasOwnProperty(p)) {
                mark.style[p] = style[p];
            }
        }
        return mark;
    },
    left_mark: function (code) {
        var mark = document.createElement("div");
        mark.className = "arrow-mark arrow-left-mark";
        mark.innerText = code;
        var style = {
            // 絶対位置指定
            position: "fixed",
            top: "0",
            bottom: "0",
            left: "0",
            // right: "0",
        };
        for (var p in style) {
            if (style.hasOwnProperty(p)) {
                mark.style[p] = style[p];
            }
        }
        return mark;
    },
    right_mark: function (code) {
        var mark = document.createElement("div");
        mark.className = "arrow-mark arrow-right-mark";
        mark.innerText = code;
        var style = {
            // 絶対位置指定
            position: "fixed",
            top: "0",
            bottom: "0",
            // left: "0",
            right: "0",
        };
        for (var p in style) {
            if (style.hasOwnProperty(p)) {
                mark.style[p] = style[p];
            }
        }
        return mark;
    },
    back_mark: function (code) {
        var mark = document.createElement("div");
        mark.innerText = "Back (" + code + ")";
        var style = {
            // 絶対位置指定
            position: "fixed",
            // top: "0",
            bottom: "10px",
            // left: "0",
            right: "150px",
            // 重なり
            zIndex: "2147483647",
            // テキスト中央
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // 余白
            padding: "0",
            margin: "0",
            // サイズ
            height: "30px",
            width: "100px",
            fontSize: "16px",
            // 色
            color: "white",
            backgroundColor: "black",
            // ボーダー
            border: "none 0 black",
            borderRadius: "4px",
        };
        for (var p in style) {
            if (style.hasOwnProperty(p)) {
                mark.style[p] = style[p];
            }
        }
        return mark;
    },
    next_mark: function (code) {
        var mark = document.createElement("div");
        mark.innerText = "Next (" + code + ")";
        var style = {
            // 絶対位置指定
            position: "fixed",
            // top: "0",
            bottom: "10px",
            // left: "0",
            right: "20px",
            // 重なり
            zIndex: "2147483647",
            // テキスト中央
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // 余白
            padding: "0",
            margin: "0",
            // サイズ
            height: "30px",
            width: "100px",
            fontSize: "16px",
            // 色
            color: "white",
            backgroundColor: "black",
            // ボーダー
            border: "none 0 black",
            borderRadius: "4px",
        };
        for (var p in style) {
            if (style.hasOwnProperty(p)) {
                mark.style[p] = style[p];
            }
        }
        return mark;
    },
    new_tab_mark: function (code) {
        var mark = document.createElement("div");
        mark.innerText = "New Tab (" + code + ")";
        var style = {
            // 絶対位置指定
            position: "fixed",
            // top: "0",
            bottom: "50px",
            // left: "0",
            right: "150px",
            // 重なり
            zIndex: "2147483647",
            // テキスト中央
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // 余白
            padding: "0",
            margin: "0",
            // サイズ
            height: "30px",
            width: "100px",
            fontSize: "16px",
            // 色
            color: "white",
            backgroundColor: "black",
            // ボーダー
            border: "none 0 black",
            borderRadius: "4px",
        };
        for (var p in style) {
            if (style.hasOwnProperty(p)) {
                mark.style[p] = style[p];
            }
        }
        return mark;
    },
    delete_tab_mark: function (code) {
        var mark = document.createElement("div");
        mark.innerText = "Del Tab (" + code + ")";
        var style = {
            // 絶対位置指定
            position: "fixed",
            // top: "0",
            bottom: "50px",
            // left: "0",
            right: "20px",
            // 重なり
            zIndex: "2147483647",
            // テキスト中央
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // 余白
            padding: "0",
            margin: "0",
            // サイズ
            height: "30px",
            width: "100px",
            fontSize: "16px",
            // 色
            color: "white",
            backgroundColor: "black",
            // ボーダー
            border: "none 0 black",
            borderRadius: "4px",
        };
        for (var p in style) {
            if (style.hasOwnProperty(p)) {
                mark.style[p] = style[p];
            }
        }
        return mark;
    }
}