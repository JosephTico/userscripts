// ==UserScript==
// @name         Joseph's Autocomplete Enhancer
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  Modify autocomplete attributes on specified pages and elements
// @author       Joseph Vargas
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Function to modify autocomplete attributes
    function modifyAutocomplete(domain, itemSelector, autocompleteValue) {
        if (!location.href.startsWith(domain)) {
            return;
        }

        // Using MutationObserver to track changes on the document and modify the autocomplete when the target elements are available
        const observer = new MutationObserver((mutations, obs) => {
            const inputElements = document.querySelectorAll(itemSelector);
            if (inputElements.length > 0) {
                inputElements.forEach(input => {
                    input.setAttribute('autocomplete', autocompleteValue);
                    console.log(`Autocomplete attribute set to "${autocompleteValue}" for an input.`);
                });
                // Once the modifications are made, disconnect the observer
                obs.disconnect();
            }
        });

        observer.observe(document, {
            childList: true,
            subtree: true
        });
    }

    // Example usage:
    const domain = 'https://oauth2.bccr.fi.cr';
    const itemSelector = '.fvaContenidoParaIdentificacion input[type="text"]';
    const autocompleteValue = 'username';
    
    // Modify autocomplete as early as possible
    modifyAutocomplete(domain, itemSelector, autocompleteValue);
})();
