/**
 *
 */
define([], function () {
    "use strict";

    /**
     * Creates a new function that, when called, has its this keyword set to the provided value, with a given
     * sequence of arguments preceding any provided when the new function is called.
     *
     * @exports es5/Function/bind
     * @see {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind}
     * @requiresJavaScriptVersion 1.8.5
     *
     * @param {string} thisArg - The value to be passed as the this parameter to the target function when the bound
     * function is called. The value is ignored if the bound function is constructed using the new operator.
     * @param {...*} [args] - Arguments to prepend to arguments provided to the bound function when
     * invoking the target function.
     * @return {function}
     */
    return Function.prototype.bind;
});