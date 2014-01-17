/**
 * Returns a one-level deep copy of a portion of an array.
 * @param {number} begin
 * @param {number=} end
 */
define([], function () {
    "use strict";

    /**
     * Returns a shallow copy of a portion of an array.
     *
     * @exports es5/Array/slice
     * @see {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice}
     * @requiresJavaScriptVersion 1.2
     *
     * @param {number} [begin=0] - Zero-based index at which to begin extraction.
     * As a negative index, begin indicates an offset from the end of the sequence. slice(-2) extracts
     * the second-to-last element and the last element in the sequence.
     * @param {number} [end] - Zero-based index at which to end extraction. slice extracts up to but not including end.
     * slice(1,4) extracts the second element through the fourth element (elements indexed 1, 2, and 3).
     * As a negative index, end indicates an offset from the end of the sequence. slice(2,-1) extracts the third element
     * through the second-to-last element in the sequence.
     * If end is omitted, slice extracts to the end of the sequence.
     * @return {array}
     */
    return Array.prototype.slice;
});