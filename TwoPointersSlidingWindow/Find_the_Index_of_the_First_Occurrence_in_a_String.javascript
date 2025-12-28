/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let m = haystack.length;
    let n = needle.length;
    for (let i = 0; i <= m - n; i++) {
        //sliding window
        if (haystack.substring(i, i + n) === needle) return i;
    } return -1;
};