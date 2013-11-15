define([], function () {
    "use strict";
    /**
     * Executes a provided function once per array element.
     *
     * @exports es5/Array/forEach
     * @see {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach}
     * @requiresJavaScriptVersion JavaScript#1.6
     *
     * @param {function} callback - Function to execute for each element.
     * @param {object} [thisArg] - Object to use as this when executing callback.
     */
    return Array.prototype.forEach;
});