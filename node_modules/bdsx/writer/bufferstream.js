"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BufferReader = exports.BufferWriter = void 0;
const abstractstream_1 = require("./abstractstream");
class BufferWriter extends abstractstream_1.AbstractWriter {
    constructor(array, size) {
        super();
        this.array = array;
        this.size = size;
    }
    put(v) {
        const osize = this.size;
        this.resize(osize + 1);
        this.array[osize] = v;
    }
    putRepeat(v, count) {
        const osize = this.size;
        this.resize(osize + count);
        this.array.fill(v, osize, count);
    }
    write(values) {
        const osize = this.size;
        this.resize(osize + values.length);
        this.array.set(values, osize);
    }
    resize(nsize) {
        const osize = this.size;
        this.size = nsize;
        if (nsize > this.array.length) {
            const narray = new Uint8Array(Math.max(this.array.length * 2, nsize, 32));
            narray.set(this.array.subarray(0, osize));
            this.array = narray;
        }
    }
    buffer() {
        return this.array.subarray(0, this.size);
    }
}
exports.BufferWriter = BufferWriter;
class BufferReader extends abstractstream_1.AbstractReader {
    constructor(array) {
        super();
        this.array = array;
        this.p = 0;
    }
    get() {
        if (this.p >= this.array.length)
            throw RangeError('EOF');
        return this.array[this.p++];
    }
    read(values, offset, length) {
        const reading = Math.min(length, this.array.length - this.p);
        if (reading > 0)
            values.set(this.array.subarray(this.p, this.p + length), offset);
        return reading;
    }
    remaining() {
        const p = this.p;
        this.p = this.array.length;
        return this.array.subarray(p);
    }
}
exports.BufferReader = BufferReader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVmZmVyc3RyZWFtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYnVmZmVyc3RyZWFtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFEQUFrRTtBQUVsRSxNQUFhLFlBQWEsU0FBUSwrQkFBYztJQUM1QyxZQUFvQixLQUFnQixFQUFTLElBQVc7UUFDcEQsS0FBSyxFQUFFLENBQUM7UUFEUSxVQUFLLEdBQUwsS0FBSyxDQUFXO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBTztJQUV4RCxDQUFDO0lBRUQsR0FBRyxDQUFDLENBQVE7UUFDUixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxTQUFTLENBQUMsQ0FBUSxFQUFFLEtBQVk7UUFDNUIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxLQUFLLENBQUMsTUFBMEI7UUFDNUIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBWTtRQUNmLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDbEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDM0IsTUFBTSxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDeEUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztTQUN2QjtJQUNMLENBQUM7SUFFRCxNQUFNO1FBQ0YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7Q0FDSjtBQWxDRCxvQ0FrQ0M7QUFFRCxNQUFhLFlBQWEsU0FBUSwrQkFBYztJQUc1QyxZQUFtQixLQUFnQjtRQUMvQixLQUFLLEVBQUUsQ0FBQztRQURPLFVBQUssR0FBTCxLQUFLLENBQVc7UUFGNUIsTUFBQyxHQUFVLENBQUMsQ0FBQztJQUlwQixDQUFDO0lBRUQsR0FBRztRQUNDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07WUFBRSxNQUFNLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6RCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNELElBQUksQ0FBQyxNQUFpQixFQUFFLE1BQWEsRUFBRSxNQUFhO1FBQ2hELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RCxJQUFJLE9BQU8sR0FBRyxDQUFDO1lBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDaEYsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVELFNBQVM7UUFDTCxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDM0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0NBQ0o7QUF0QkQsb0NBc0JDIn0=