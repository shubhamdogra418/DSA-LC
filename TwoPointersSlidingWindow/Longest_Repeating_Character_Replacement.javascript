/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let left = 0;
    let ans = 0;
    let map = new Map();
    let mostFrequent = 0;
    for (let right = 0; right < s.length; right++) {
        let ch = s[right];
        map.set(ch, (map.get(ch) || 0) + 1);

        //this is the one which will give us the relaxation
        mostFrequent = Math.max(mostFrequent, map.get(ch));

        while (right - left + 1 - mostFrequent > k) {
            //shrink the window here
            map.set(s[left], map.get(s[left]) - 1);
            left++;
        }
        ans = Math.max(ans, right - left + 1);
    }
    return ans;

};