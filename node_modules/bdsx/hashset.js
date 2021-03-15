"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashSet = void 0;
const hashkey = Symbol('hash');
const nextlink = Symbol('hash_next');
const INITIAL_CAP = 16;
class HashSet {
    constructor() {
        this.array = new Array(INITIAL_CAP);
        this.size = 0;
        for (let i = 0; i < INITIAL_CAP; i++) {
            this.array[i] = null;
        }
    }
    _resetCap(n) {
        const narray = new Array(n);
        for (let i = 0; i < n; i++) {
            narray[i] = null;
        }
        for (let item of this.array) {
            for (;;) {
                if (item === null)
                    break;
                const next = item[nextlink];
                const idx = item[hashkey] % narray.length;
                item[nextlink] = narray[idx];
                narray[idx] = item;
                item = next;
            }
        }
        this.array.length = 0;
        this.array = narray;
    }
    [Symbol.iterator]() {
        return this.keys();
    }
    /**
     * @deprecated use values() or keys()
     */
    entires() {
        return this.keys();
    }
    keys() {
        return this.values();
    }
    *values() {
        for (let item of this.array) {
            for (;;) {
                if (item === null)
                    break;
                yield item;
                item = item[nextlink];
            }
        }
    }
    get(item) {
        let hash = item[hashkey];
        if (hash === undefined)
            hash = item[hashkey] = item.hash() >>> 0;
        const idx = hash % this.array.length;
        let found = this.array[idx];
        for (;;) {
            if (found === null)
                return null;
            if (found[hashkey] === hash)
                return found;
            found = found[nextlink];
        }
    }
    has(item) {
        let hash = item[hashkey];
        if (hash === undefined)
            hash = item[hashkey] = item.hash() >>> 0;
        const idx = hash % this.array.length;
        let found = this.array[idx];
        for (;;) {
            if (found === null)
                return false;
            if (found[hashkey] === hash)
                return true;
            found = found[nextlink];
        }
    }
    delete(item) {
        let hash = item[hashkey];
        if (hash === undefined)
            hash = item[hashkey] = item.hash() >>> 0;
        const idx = hash % this.array.length;
        let found = this.array[idx];
        if (found === null)
            return false;
        if (found[hashkey] === hash && item.equals(found)) {
            this.array[idx] = found[nextlink];
            found[nextlink] = null;
            this.size--;
            return true;
        }
        for (;;) {
            const next = found[nextlink];
            if (next === null)
                return false;
            if (next[hashkey] === hash && next.equals(found)) {
                found[nextlink] = next[nextlink];
                next[nextlink] = null;
                this.size--;
                return true;
            }
            found = next;
        }
    }
    add(item) {
        this.size++;
        const cap = this.array.length;
        if (this.size > (cap * 3 >> 2)) {
            this._resetCap(cap * 3 >> 1);
        }
        let hash = item[hashkey];
        if (hash === undefined)
            hash = item[hashkey] = item.hash() >>> 0;
        const idx = hash % cap;
        item[nextlink] = this.array[idx];
        this.array[idx] = item;
        return this;
    }
}
exports.HashSet = HashSet;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzaHNldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhc2hzZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQy9CLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQVVyQyxNQUFNLFdBQVcsR0FBRyxFQUFFLENBQUM7QUFFdkIsTUFBYSxPQUFPO0lBSWhCO1FBSFEsVUFBSyxHQUFjLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzNDLFNBQUksR0FBRyxDQUFDLENBQUM7UUFHWixLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsV0FBVyxFQUFDLENBQUMsRUFBRSxFQUFFO1lBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztJQUVPLFNBQVMsQ0FBQyxDQUFRO1FBQ3RCLE1BQU0sTUFBTSxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLEtBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDbEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUNwQjtRQUVELEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUN6QixTQUFTO2dCQUNMLElBQUksSUFBSSxLQUFLLElBQUk7b0JBQUUsTUFBTTtnQkFDekIsTUFBTSxJQUFJLEdBQVUsSUFBSSxDQUFDLFFBQVEsQ0FBTSxDQUFDO2dCQUV4QyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFFLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMs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