"use strict"
chrome.runtime.onMessage.addListener(function (message, sender, callback) {
    if (message.id === Common.message_passing_ids.change_option) {
        // すべてのタブに対して、設定が変更されたことを通知する
        chrome.tabs.query({}, function (tabs) {
            tabs.forEach(function (tab) {
                chrome.tabs.sendMessage(tab.id, {
                    id: message.id
                }, function () {});
            });
        });
    }
});