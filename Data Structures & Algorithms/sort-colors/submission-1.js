class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let n = nums.length;

        let low = 0;
        let high = n-1;
        let mid = 0;

        while(mid <= high) {
            switch(nums[mid]) {
                case 0:
                    [nums[low], nums[mid]] = [nums[mid], nums[low]];
                    low++;
                    mid++;
                    break;
                case 1:
                    mid++;
                    break;
                case 2:
                    [nums[mid], nums[high]] = [nums[high], nums[mid]];
                    high--;
                default:
                    break;
            }
        }
    }
}
