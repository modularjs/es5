define([

], function () {
    "use strict";

    /**
     * Applies a function against an accumulator and each value of the array (from left-to-right) has to reduce it to a
     * single value.
     *
     * @exports es5/Array/reduce
     * @see {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce}
     * @requiresJavaScriptVersion 1.8
     *
     * @param {function} callback - function to execute on each value in the array, taking four arguments:
     * previousValue, currentValue, index, array
     *
     * @param {object} initialValue - object to use as the first argument to the first call of the callback.
     */
    return Array.prototype.reduce;
});