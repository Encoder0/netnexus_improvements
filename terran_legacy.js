// ==UserScript==
// @name         Terran Legacy Center Content
// @namespace    https://github.com/Encoder0/netnexus_enchancements
// @version      0.2
// @description  Center the TL content
// @author       Encoder0
// @match        http*://www.netnexus.com/tlclassic/
// @match        http*://www.netnexus.com/tlclassic/?*
// @match        http*://www.netnexus.com/tlclassic/Main.cgi
// @icon         https://www.google.com/s2/favicons?sz=64&domain=netnexus.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Center the content with some empty pages on each side
    if (window.location.pathname == "/tlclassic/"){
        let parentNode = document.querySelector("html > frameset");
        parentNode.cols = "*,245,600,*";
        let leftNode = document.createElement("frame");
        leftNode.name = "Side";
        leftNode.src = "about:blank";
        leftNode.style = "background-color: black;";
        let rightNode = leftNode.cloneNode()
        parentNode.prepend(leftNode);
        parentNode.append(rightNode);
    }
    // Change color of item text
    else if (window.location.pathname.includes("Main.cgi")){
        let fonts = document.querySelectorAll('font[color="blue"]');
        if (fonts.length > 0){
            fonts.forEach(function (currentValue, currentIndex, listObj) {
                currentValue.color = "pink";
            });
        }
    }
})();