class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let map = new Map();
        let n = nums.length;
        let ans;

        nums.forEach(elem => {
            map.set(elem, (map.get(elem) || 0) + 1);
        });

        for(const [key, value] of map) {
            if(value > n/2) 
                ans = key;
        }

        return ans;
    }
}
