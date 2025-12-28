/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    let len1 = s1.length;
    let len2 = s2.length;
    if (len1 > len2) return false;

    //two arrays to fill for s1 and s2 and matching 
    let count1 = new Array(26).fill(0);
    let count2 = new Array(26).fill(0);

    //taking the best case if two first characters then return trur from here only 
    for (let i = 0; i < len1; i++) {
        count1[s1.charCodeAt(i) - 97]++;
        count2[s2.charCodeAt(i) - 97]++;
    }

    //first two characters match if not slide the window

    const matches = () => count1.every((c, i) => c === count2[i]);

    if (matches()) return true;

    //sliding the window as first two characters already been compared so starting from means ab- 0,1 length is 2 so start from 2 till len2
    for (let i = len1; i < len2; i++) {
        //next characters matching 
        count2[s2.charCodeAt(i) - 97]++;
        count2[s2.charCodeAt(i - len1) - 97]--;
        if (matches()) return true;

    } return false;



};