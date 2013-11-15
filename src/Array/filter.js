define([], function () {
    "use strict";
    /**
     * Creates a new array with all elements that pass the test implemented by the provided function.
     *
     * @exports es5/Array/filter
     * @see {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter}
     * @requiresJavaScriptVersion JavaScript#1.2
     *
     * @param {function} callback - Function to test each element of the array.
     * @param {object} [thisObject] - Object to use as this when executing callback.
     * @return {array}
     */
    return Array.prototype.filter;
});