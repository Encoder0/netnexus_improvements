// ==UserScript==
// @name         Terran Legacy Center Content
// @namespace    https://github.com/Encoder0/netnexus_improvements
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
    
    else if (window.location.pathname.includes("Main.cgi")){
        // Change color of item text
        let fonts = document.querySelectorAll('font[color="blue"]');
        if (fonts.length > 0){
            fonts.forEach(function (currentValue, currentIndex, listObj) {
                currentValue.color = "pink";
            });
        }

        // Set bank amount to current money always
        let amount_input = document.querySelector("input[name='AMMOUNT']")
        if (amount_input){
            amount_input.value = document.querySelector("body > table:nth-child(2) > tbody > tr > td:nth-child(1) > table > tbody > tr:nth-child(2) > td:nth-child(2)").innerText.replace('$','')
        }
    }
})();