"use strict";
/**
 * Create the overlay container element, which is simply a div
 * with the 'md-overlay-container' class on the document body.
 */
function createOverlayContainer() {
    var container = document.createElement('div');
    container.classList.add('md-overlay-container');
    document.body.appendChild(container);
    return container;
}
exports.createOverlayContainer = createOverlayContainer;
//# sourceMappingURL=/Users/C-Styles/Code/repos/material2/tmp/broccoli_type_script_compiler-input_base_path-BUu8SwQ0.tmp/0/core/overlay/overlay-container.js.map