"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RakNetInstance = void 0;
const tslib_1 = require("tslib");
const core_1 = require("bdsx/core");
const nativeclass_1 = require("bdsx/nativeclass");
const raknet_1 = require("./raknet");
let RakNetInstance = class RakNetInstance extends nativeclass_1.NativeClass {
};
tslib_1.__decorate([
    nativeclass_1.nativeField(core_1.VoidPointer)
], RakNetInstance.prototype, "vftable", void 0);
tslib_1.__decorate([
    nativeclass_1.nativeField(raknet_1.RakNet.RakPeer.ref(), 0x1e8)
], RakNetInstance.prototype, "peer", void 0);
RakNetInstance = tslib_1.__decorate([
    nativeclass_1.nativeClass()
], RakNetInstance);
exports.RakNetInstance = RakNetInstance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFrbmV0aW5zdGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyYWtuZXRpbnN0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsb0NBQXdDO0FBQ3hDLGtEQUF5RTtBQUN6RSxxQ0FBa0M7QUFHbEMsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBZSxTQUFRLHlCQUFXO0NBSzlDLENBQUE7QUFIRztJQURDLHlCQUFXLENBQUMsa0JBQVcsQ0FBQzsrQ0FDTDtBQUVwQjtJQURDLHlCQUFXLENBQUMsZUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLENBQUM7NENBQ3JCO0FBSlgsY0FBYztJQUQxQix5QkFBVyxFQUFFO0dBQ0QsY0FBYyxDQUsxQjtBQUxZLHdDQUFjIn0=