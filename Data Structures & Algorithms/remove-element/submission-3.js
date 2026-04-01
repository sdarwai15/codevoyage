class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let i = 0;
        let j = 0;
        let len = nums.length;

        while (i < len && j < len) {
            if(nums[i] === val) {
                while (j<len) {
                    if(nums[j] !== val) break;
                    j++;
                }
                if(j>=len) break;

                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
                i++;
            } else {
                i++;
                j++;
            }
        }

        return i;
    }
}
