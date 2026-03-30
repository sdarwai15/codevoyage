class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let prefix = "";

        if(strs.length === 0) return prefix;

        strs.sort();

        let firstElem = strs[0];
        let lastElem = strs[strs.length - 1];

        let pointer = 0;
        while(pointer < firstElem.length) {
            if (firstElem[pointer] !== lastElem[pointer]) {
                return prefix;
            } else {
                prefix += firstElem[pointer];
            }
            pointer++;
        }

        return prefix;
    }
}
