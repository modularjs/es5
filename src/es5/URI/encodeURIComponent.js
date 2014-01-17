define([], function () {
    "use strict";

    /**
     * Encodes a Uniform Resource Identifier (URI) component by replacing each instance of certain
     * characters by one, two, three, or four escape sequences representing the UTF-8 encoding of
     * the character (will only be four escape sequences for characters composed of two "surrogate"
     * characters).
     *
     * @exports es5/String/trim
     * @see {@linkcode https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/encodeURIComponent}
     * @requiresJavaScriptVersion 1.1
     */
    return window.encodeURIComponent;
});