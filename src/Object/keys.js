define([], function () {
    "use strict";

    /**
     * Returns an array of a given object's own enumerable properties, in the same order as that provided
     * by a for-in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).
     *
     * @exports es5/Object/keys
     * @see {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys}
     * @requiresJavaScriptVersion 1.8.5
     *
     * @param {object} obj - The object whose enumerable own properties are to be returned.
     * @return {array}
     */
    return Object.keys;
});