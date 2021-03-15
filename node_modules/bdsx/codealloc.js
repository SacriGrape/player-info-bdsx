"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assembler_1 = require("./assembler");
const core_1 = require("./core");
assembler_1.asm.const_str = function (str, encoding = 'utf-8') {
    const buf = Buffer.from(str + '\0', encoding);
    core_1.chakraUtil.JsAddRef(buf);
    return buf;
};
assembler_1.X64Assembler.prototype.alloc = function () {
    const buffer = this.buffer();
    const memsize = this.getDefAreaSize();
    const memalign = this.getDefAreaAlign();
    const mem = core_1.cgate.allocExecutableMemory(buffer.length + memsize, memalign);
    mem.setBuffer(buffer);
    return mem;
};
assembler_1.X64Assembler.prototype.allocs = function () {
    const buffer = this.buffer();
    const memsize = this.getDefAreaSize();
    const memalign = this.getDefAreaAlign();
    const buffersize = buffer.length;
    const mem = core_1.cgate.allocExecutableMemory(buffersize + memsize, memalign);
    mem.setBuffer(buffer);
    const out = {};
    const labels = this.labels();
    for (const name in labels) {
        out[name] = mem.add(labels[name]);
    }
    const defs = this.defs();
    for (const name in defs) {
        out[name] = mem.add(defs[name] + buffersize);
    }
    return out;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZWFsbG9jLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29kZWFsbG9jLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQWdEO0FBQ2hELGlDQUEwRDtBQWMxRCxlQUFHLENBQUMsU0FBUyxHQUFHLFVBQVMsR0FBVSxFQUFFLFdBQXdCLE9BQU87SUFDaEUsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLGlCQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQyxDQUFDO0FBRUYsd0JBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHO0lBQzNCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM3QixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3hDLE1BQU0sR0FBRyxHQUFHLFlBQUssQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN6RSxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RCLE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQyxDQUFDO0FBRUYsd0JBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHO0lBQzVCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM3QixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3hDLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDakMsTUFBTSxHQUFHLEdBQUcsWUFBSyxDQUFDLHFCQUFxQixDQUFDLFVBQVUsR0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdEUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUV0QixNQUFNLEdBQUcsR0FBaUMsRUFBRSxDQUFDO0lBQzdDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM3QixLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sRUFBRTtRQUN2QixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUNyQztJQUNELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QixLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksRUFBRTtRQUNyQixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUM7S0FDaEQ7SUFDRCxPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUMsQ0FBQyJ9