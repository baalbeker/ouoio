// ==UserScript==
// @name         ouo.io ouo.press bypasser for nsw2u
// @namespace    http://tampermonkey.net/
// @version      2024-09-10
// @description  skip the two forms
// @author       baalbeker
// @match              *://*.ouo.io/*
// @match              *://*.ouo.press/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @require            https://code.jquery.com/jquery-3.6.0.min.js
// @grant              GM_addScript
// @run-at             document-end
// ==/UserScript==

$(function () {
    let e = new URLSearchParams(location.search), t = {};

    if (location.hostname.endsWith("ouo.io") || location.hostname.endsWith("ouo.press")) {
        let path = location.pathname.replace(/\/$/, ''); // Remove trailing slash

        if (path.includes("/go")) {  // Check if the path contains "/go"
            let e = (location.hostname + Date.now()).split("-").join("").split("_").join("").split(".").join("");
            t[e] = setInterval(() => {
                $("#form-go").submit();
            }, 1000);
            $("#form-go").on("submit", n => {
                clearInterval(t[e]);
            });
        } else {
            let e = (location.hostname + Date.now()).split("-").join("").split("_").join("").split(".").join("");
            t[e] = setInterval(() => {
                $("#form-captcha").submit();
            }, 1000);
            $("#form-captcha").on("submit", n => {
                clearInterval(t[e]);
            });
        }
    }
});

