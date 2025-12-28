/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let n = height.length;

    let left = [n];
    left[0] = height[0];
    for (let i = 1; i < height.length; i++) {
        left[i] = Math.max(height[i], left[i - 1]);
    }

    //right side
    let right = [n];
    right[n - 1] = height[n - 1]; //last element
    for (let i = height.length - 2; i >= 0; i--) {
        right[i] = Math.max(height[i], right[i + 1]);
    }

    //now take min of two and add up the wateer

    let water = 0;
    for (let i = 0; i < height.length - 1; i++) {
        let min = Math.min(left[i], right[i]);
        water += min - height[i];
    }
    return water;

};