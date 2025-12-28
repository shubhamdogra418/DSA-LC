/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;
    while (low < high) {
        let sum = nums[low] + nums[high];
        if (sum > target) high--;
        else if (sum < target) low++;
        else return [low + 1, high + 1];

    } return [-1, -1];

};