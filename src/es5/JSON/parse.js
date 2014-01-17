define([], function () {
    "use strict";

    /**
     * Parse a string as JSON, optionally transforming the value produced by parsing.
     * sequence of arguments preceding any provided when the new function is called.
     *
     * @exports es5/JSON/parse
     * @see {@linkcode https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/JSON/parse}
     * @requiresJavaScriptVersion 1.7
     *
     * @param {string} text - The string to parse as JSON.  See the JSON object for a description of JSON syntax.
     * @param {function} [reviver] - If a function, prescribes how the value originally produced by
     * parsing is transformed, before being returned.
     * @return {object}
     */
    if (window.JSON && window.JSON.parse) {
        return window.JSON.parse;
    }
});