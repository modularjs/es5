define([], function () {
    "use strict";

    /**
     * Returns the last index at which a given element can be found in the array, or -1 if it is not present.
     * The array is searched backwards, starting at fromIndex.
     *
     * @exports es5/Array/lastIndexOf
     * @see {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf}
     * @requiresJavaScriptVersion 1.6
     *
     * @param {*} searchElement - Element to locate in the array.
     * @param {number} [fromIndex=array.length] - The index at which to start searching backwards. Defaults to the
     * array's length, i.e. the whole array will be searched. If the index is greater than or equal to the length of the
     * array, the whole array will be searched. If negative, it is taken as the offset from the end of the array.
     * Note that even when the index is negative, the array is still searched from back to front. If the calculated
     * index is less than 0, -1 is returned, i.e. the array will not be searched.
     * @return {number}
     */
    return Array.prototype.lastIndexOf;
});