// ==UserScript==
// @name        Grupo Nación Paywall Remover
// @namespace   Violentmonkey Scripts
// @include     http*://*.nacion.com/*story/*
// @include     http*://*.elfinancierocr.com/*story/*
// @grant       none
// @version     1.0
// @author      JosephTico
// @description 11/28/2022, 4:32:25 PM
// ==/UserScript==

// inject CSS into document
var customStyle = document.createElement('style');
customStyle.innerText = `
.article-body-wrapper__styled {
    height: auto !important;
    opacity: 1 !important;
    user-select: initial !important;
    visibility: initial !important;
}

.post {
    display: none !important;
}
`;
document.head.appendChild(customStyle);