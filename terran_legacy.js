// ==UserScript==
// @name         Terran Legacy Center Content
// @namespace    https://github.com/Encoder0/netnexus_enchancements
// @version      0.1
// @description  Center the TL content
// @author       Encoder0
// @match        http://www.netnexus.com/tlclassic/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=netnexus.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var parentNode = document.querySelector("html > frameset");
    parentNode.cols = "*,245,600,*";
    var leftNode = document.createElement("frame");
    leftNode.name = "Side";
    leftNode.src = "about:blank";
    leftNode.style = "background-color: black;";
    var rightNode = leftNode.cloneNode()
    parentNode.prepend(leftNode);
    parentNode.append(rightNode);
})();