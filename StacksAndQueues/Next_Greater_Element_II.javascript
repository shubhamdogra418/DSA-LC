/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) { //O(n)
    let result = [];
    let stack = [];
    let n = nums.length;
    //not using another array but indices only
    for (let i = 2 * n - 1; i >= 0; i--) {
        let num = nums[i % n];
        while (stack.length && num >= stack[stack.length - 1]) stack.pop();
        if (i < n) result[i] = stack.length ? stack[stack.length - 1] : -1;
        stack.push(num);

    } return result;


};