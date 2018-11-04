"use strict";
/**
 * 設定値読み込み
 */
document.addEventListener("DOMContentLoaded", function () {
    chrome.storage.sync.get(Common.default_option, function (options) {
        for (var id in options) {
            document.getElementById(id).value = options[id];
        }
    });
});
/**
 * 設定値の変更を通知
 */
document.addEventListener("change", function () {
    var options = {};
    for (var id in Common.default_option) {
        options[id] = document.getElementById(id).value
    }
    chrome.storage.sync.set(options, function () {
        var message = {
            id: Common.message_passing_ids.change_option
        };
        chrome.runtime.sendMessage(message, function () {;;
        });
    });
});