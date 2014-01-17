define([], function () {
    "use strict";

    /**
     * Tests whether some element in the array passes the test implemented by the provided function.
     *
     * @exports es5/Array/some
     * @see {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some}
     * @requiresJavaScriptVersion 1.6
     *
     * @param {function} callback - Function to test for each element.
     * @param {object} thisArg - Object to use as this when executing callback.
     * @return {boolean}
     */
    return Array.prototype.some;
});