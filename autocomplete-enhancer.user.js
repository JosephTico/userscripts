// ==UserScript==
// @name         Joseph's Autocomplete Enhancer
// @namespace    http://tampermonkey.net/
// @version      1.0.4
// @description  Modify autocomplete attributes on specified pages and elements
// @author       Joseph Vargas
// @downloadURL  https://github.com/JosephTico/userscripts/raw/master/autocomplete-enhancer.user.js
// @updateURL    https://github.com/JosephTico/userscripts/raw/master/autocomplete-enhancer.user.js
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to modify autocomplete attributes
    // domain: The domain where the script should run
    // itemSelector: CSS selector for the input elements
    // autocompleteValue: Value to set for the autocomplete attribute
    function modifyAutocomplete(domain, itemSelector, autocompleteValue) {
        // Check if the current page's domain matches the specified domain
        if (!location.href.startsWith(domain)) {
            return;
        }

        // Find the target input elements by the itemSelector
        const inputElements = document.querySelectorAll(itemSelector);
        if (inputElements.length === 0) {
            console.log('No input elements found.');
            return;
        }

        // Modify the autocomplete attribute of each input element
        inputElements.forEach(input => {
            input.setAttribute('autocomplete', autocompleteValue);
            console.log(`Autocomplete attribute set to "${autocompleteValue}" for an input.`);
        });
    }

    // Example usage:
    // Modify the parameters below as needed and add more calls to modifyAutocomplete if necessary
    const domain = 'https://oauth2.bccr.fi.cr';
    const itemSelector = '.fvaContenidoParaIdentificacion input[type="text"]';
    const autocompleteValue = 'username';
    
    // Run the function after the DOM is fully loaded
     modifyAutocomplete(domain, itemSelector, autocompleteValue));
})();
