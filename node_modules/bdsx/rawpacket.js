"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RawPacket = void 0;
const networkidentifier_1 = require("./bds/networkidentifier");
const packet_1 = require("./bds/packet");
const pointer_1 = require("./pointer");
const abstractstream_1 = require("./writer/abstractstream");
class RawPacket extends abstractstream_1.AbstractWriter {
    constructor(packetId) {
        super();
        this.data = new pointer_1.CxxStringWrapper(true);
        this.sharedptr = new packet_1.PacketSharedPtr(true);
        this.packet = null;
        this.packetId = 0;
        this.data.construct();
        if (packetId !== undefined) {
            this.reset(packetId);
        }
    }
    getId() {
        return this.packetId;
    }
    put(v) {
        const str = this.data;
        const i = str.length;
        str.resize(i + 1);
        str.valueptr.setUint8(v, i);
    }
    putRepeat(v, count) {
        const str = this.data;
        const i = str.length;
        str.resize(i + count);
        str.valueptr.fill(v, count, i);
    }
    write(n) {
        const str = this.data;
        const i = str.length;
        str.resize(i + n.length);
        str.valueptr.setBuffer(n, i);
    }
    dispose() {
        this.data.destruct();
        if (this.packet !== null) {
            this.packet = null;
            this.sharedptr.dispose();
        }
    }
    reset(packetId, unknownarg = 0) {
        this.packetId = packetId;
        if (this.packet !== null) {
            this.packet = null;
            this.sharedptr.dispose();
        }
        packet_1.createPacketRaw(this.sharedptr, packetId);
        this.packet = this.sharedptr.p;
        this.data.resize(0);
        const unknown = this.packet.getUint8(0x10) & 3;
        const unknown2 = unknownarg & 3;
        this.writeVarUint((packetId & 0x3ff) | (unknown2 << 10) | (unknown << 12));
    }
    sendTo(target) {
        if (this.packet === null)
            throw Error('packetId is not defined. Please set it on constructor');
        networkidentifier_1.networkHandler.sendInternal(target, this.packet, this.data);
    }
}
exports.RawPacket = RawPacket;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF3cGFja2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmF3cGFja2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtEQUE0RTtBQUM1RSx5Q0FBd0U7QUFDeEUsdUNBQTZDO0FBQzdDLDREQUF5RDtBQUV6RCxNQUFhLFNBQVUsU0FBUSwrQkFBYztJQU16QyxZQUFZLFFBQWdCO1FBQ3hCLEtBQUssRUFBRSxDQUFDO1FBTkssU0FBSSxHQUFHLElBQUksMEJBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsY0FBUyxHQUFHLElBQUksd0JBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxXQUFNLEdBQWUsSUFBSSxDQUFDO1FBQzFCLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFJakIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUV0QixJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN4QjtJQUNMLENBQUM7SUFFRCxLQUFLO1FBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxHQUFHLENBQUMsQ0FBUTtRQUNSLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdEIsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUNyQixHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQixHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNELFNBQVMsQ0FBQyxDQUFRLEVBQUUsS0FBWTtRQUM1QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDckIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDdEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsS0FBSyxDQUFDLENBQVk7UUFDZCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDckIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZCLEdBQUcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsT0FBTztRQUNILElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtZQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzVCO0lBQ0wsQ0FBQztJQUVELEtBQUssQ0FBQyxRQUFlLEVBQUUsYUFBb0IsQ0FBQztRQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUV6QixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDNUI7UUFFRCx3QkFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVwQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0MsTUFBTSxRQUFRLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVELE1BQU0sQ0FBQyxNQUF3QjtRQUMzQixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSTtZQUFFLE1BQU0sS0FBSyxDQUFDLHVEQUF1RCxDQUFDLENBQUM7UUFDL0Ysa0NBQWMsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Q0FDSjtBQW5FRCw4QkFtRUMifQ==