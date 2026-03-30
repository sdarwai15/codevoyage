class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let hash = {};

        for(let i=0; i<s.length; i++) {
            if(hash[s[i]]) {
                hash[s[i]]++;
            } else {
                hash[s[i]] = 1;
            }
        }

        for(let i=0; i<t.length; i++) {
            if(hash[t[i]]) {
                hash[t[i]]--;
            } else {
                hash[t[i]] = 1;
            }
        }

        for (const key of Object.keys(hash)) {
            if(hash[key] !== 0) return false;
        }

        return true;
    }
}
