/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let low = 0;
    let high = height.length - 1;
    let maxWater = 0;
    while (low < high) {
        if (height[low] >= height[high]) {
            maxWater = Math.max(maxWater, (high - low) * height[high]);
            high--;
        } else {
            maxWater = Math.max(maxWater, (high - low) * height[low]);
            low++;
        }
    }
    return maxWater;

};