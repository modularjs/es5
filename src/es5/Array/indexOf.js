define([], function () {
    "use strict";

    /**
     * Returns the first index at which a given element can be found in the array, or -1 if it is not present.
     *
     * @exports es5/Array/indexOf
     * @see {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf}
     * @requiresJavaScriptVersion 1.6
     *
     * @param {*} searchElement - Element to locate in the array.
     * @param {number} [fromIndex=0] - The index to start the search at. If the index is greater than or equal to the
     * array's length, -1 is returned, which means the array will not be searched. If the provided index value is
     * a negative number, it is taken as the offset from the end of the array. Note: if the provided index is negative,
     * the array is still searched from front to back. If the calculated index is less than 0, then the whole array
     * will be searched.
     * @return {number}
     */
    return Array.prototype.indexOf;
});