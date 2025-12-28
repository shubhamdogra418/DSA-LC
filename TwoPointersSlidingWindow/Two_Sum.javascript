/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let find = target - nums[i];
        if (map.has(find)) {
            return [map.get(find), i];
        } else map.set(nums[i], i);
    } return [-1, -1];

};