/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const answer = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        answer[i] = answer[i - 1] * nums[i - 1];
    }


    let suffix = 1;
    for (let i = n - 2; i >= 0; i--) {
        suffix *= nums[i + 1];
        answer[i] *= suffix;
    }

    return answer;
};
    
