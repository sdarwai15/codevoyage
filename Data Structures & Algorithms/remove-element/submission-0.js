class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let accumulator = [];

        nums.forEach(elem => elem !== val ? accumulator.push(elem) : null);

        for(let i=0; i<accumulator.length; i++) {
            nums[i] = accumulator[i];
        }

        return accumulator.length;
    }
}
