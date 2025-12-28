/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    //we have dulicates here and to skip them sorting the array

    nums.sort((a, b) => a - b);
    let result = [];

    //fixing the one element 
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let low = i + 1;
        let high = nums.length - 1;

        while (low < high) {
            let sum = nums[i] + nums[low] + nums[high];
            if (sum === 0) {
                result.push([nums[i], nums[low], nums[high]]);
                low++;
                high--;

                while (low < high && nums[low] === nums[low - 1]) low++;
                while (low < high && nums[high] === nums[high + 1]) high--;
            } else if (sum < 0) low++;
            else high--;
        }
    } return result;

};