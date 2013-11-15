define([], function () {
    "use strict";

    /**
     * Creates a new array with the results of calling a provided function on every element in this array.
     *
     * @exports es5/Array/map
     * @see {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map}
     * @requiresJavaScriptVersion 1.6
     *
     * @param {function} callback - Function that produces an element of the new Array from an element
     * of the current one.
     * @param {object} thisArg - Object to use as this when executing callback.
     * @return {array}
     */
    return Array.prototype.map;
});