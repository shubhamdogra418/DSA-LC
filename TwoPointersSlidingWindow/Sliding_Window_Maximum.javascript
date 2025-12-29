/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    //following deque monotonically approach

    let deque = [];
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        //shift logic
        //remove the max element of previous window 
        if (deque.length && deque[0] === i - k) deque.shift();

        //push logic
        //simply pop and push
        while (deque.length && nums[deque[deque.length - 1]] < nums[i]) deque.pop();
        deque.push(i);

        //result logic
        //if found max of previous window then push into result
        if (i >= k - 1) result.push(nums[deque[0]]);
    } return result;

};