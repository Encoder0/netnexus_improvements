// ==UserScript==
// @name         War2 Keyboard Shortcut Improvements
// @namespace    https://github.com/Encoder0/netnexus_enchancements
// @version      0.1
// @description  improves keyboard shortcuts
// @author       Encoder0
// @match        http://war2.netnexus.com/game/index.php*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=netnexus.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function KeyCheck(e)
    {
        var KeyID = (window.event) ? event.keyCode : e.keyCode;
        switch(KeyID)
        {

            case 37: // left arrow
                document.location = "http://war2.netnexus.com/game/index.php?direction=west";
                break;
            case 38: // up arrow
                document.location = "http://war2.netnexus.com/game/index.php?direction=north";
                break;
            case 39: // right arrow
                document.location = "http://war2.netnexus.com/game/index.php?direction=east";
                break;
            case 40: // down arrow
                document.location = "http://war2.netnexus.com/game/index.php?direction=south";
                break;
            case 65: // a
                document.location = "http://war2.netnexus.com/game/index.php?baction=attack&type=weapon";
                break;
            case 81: // q
                document.location = "http://war2.netnexus.com/game/index.php?baction=attack&type=spell&quickspell=yes";
                break;
            case 69: // e
                var pickup = document.querySelector('a[href*="pickup"]')
                if (pickup){
                    if (confirm("Pickup item before leaving?")){
                        document.location = pickup.href;
                        break;
                    }
                }
                document.location = "http://war2.netnexus.com/game/index.php?action=flee";
                break;
            case 70: // f
                document.location = "http://war2.netnexus.com/game/index.php?action=battle";
            break;
        }
    }
    document.onkeyup = KeyCheck;
})();