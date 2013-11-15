define([], function () {
    "use strict";

    /**
     * Creates an error object.
     *
     * @exports es5/Error/TypeError
     * @see {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError}
     * @requiresJavaScriptVersion 1.5
     *
     * @constructor
     * @param {string} [message] - Human-readable description of the error
     * @param {string} [fileName] - The value for the fileName property on the created Error object.
     * Defaults to the name of the file containing the code that called the Error() constructor.
     * @param {number} [lineNumber] - The value for the lineNumber property on the created Error object.
     * Defaults to the line number containing the Error() constructor invokation.
     */
    return window.TypeError;
});