class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        return this.mergeSort(nums);
    }

    mergeSort(nums) {
        let n = nums.length;

        if(n <= 1) return nums;

        let mid = Math.floor(n / 2);

        let left = this.mergeSort(nums.slice(0, mid));
        let right = this.mergeSort(nums.slice(mid));

        return this.merge(left, right);
    }

    merge(left, right) {
        let result = [];
        let i=0, j=0;

        while(i<left.length && j<right.length) {
            if(left[i] <= right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }

        while (i<left.length) {
            result.push(left[i]);
            i++;
        }

        while (j<right.length) {
            result.push(right[j]);
            j++
        }

        return result;
    }
}
