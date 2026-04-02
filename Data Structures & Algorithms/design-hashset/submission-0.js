class MyHashSet {
    constructor() {
        this.hash = [];
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        const exist = this.contains(key);

        if(!exist) this.hash.push(key);
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        this.hash = this.hash.filter(val => val !== key);
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        for(const val of this.hash) {
            if(val === key)
                return true;
        }

        return false;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
