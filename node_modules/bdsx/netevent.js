"use strict";
/**
 * @deprecated combined to nethook.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.watchAll = exports.close = exports.sendRaw = exports.send = exports.after = exports.before = exports.raw = exports.readLoginPacket = void 0;
const networkidentifier_1 = require("./bds/networkidentifier");
const nethook_1 = require("./nethook");
var readLoginPacket = nethook_1.nethook.readLoginPacket;
exports.readLoginPacket = readLoginPacket;
/**
 * @deprecated use nethook.raw
 */
function raw(id) {
    return nethook_1.nethook.raw(id);
}
exports.raw = raw;
/**
 * @deprecated use nethook.before
 */
function before(id) {
    return nethook_1.nethook.before(id);
}
exports.before = before;
/**
 * @deprecated use nethook.after
 */
function after(id) {
    return nethook_1.nethook.after(id);
}
exports.after = after;
/**
 * @deprecated use nethook.send
 */
function send(id) {
    return nethook_1.nethook.send(id);
}
exports.send = send;
/**
 * @deprecated use nethook.sendRaw
 */
function sendRaw(id) {
    return nethook_1.nethook.sendRaw(id);
}
exports.sendRaw = sendRaw;
/**
 * @deprecated use NetworkIdentifier.close
 */
exports.close = networkidentifier_1.NetworkIdentifier.close;
/**
 * @deprecated use nethook.watchAll
 */
function watchAll(exceptions) {
    return nethook_1.nethook.watchAll(exceptions);
}
exports.watchAll = watchAll;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0ZXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZXRldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7OztBQUdILCtEQUE0RDtBQUU1RCx1Q0FBb0M7QUFFcEMsSUFBTyxlQUFlLEdBQUcsaUJBQU8sQ0FBQyxlQUFlLENBQUM7QUFFeEMsMENBQWU7QUFFeEI7O0dBRUc7QUFDSCxTQUFnQixHQUFHLENBQUMsRUFBcUI7SUFDckMsT0FBTyxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMzQixDQUFDO0FBRkQsa0JBRUM7QUFFRDs7R0FFRztBQUNILFNBQWdCLE1BQU0sQ0FBZ0MsRUFBSztJQUN2RCxPQUFPLGlCQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzlCLENBQUM7QUFGRCx3QkFFQztBQUVEOztHQUVHO0FBQ0gsU0FBZ0IsS0FBSyxDQUFnQyxFQUFLO0lBQ3RELE9BQU8saUJBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0IsQ0FBQztBQUZELHNCQUVDO0FBRUQ7O0dBRUc7QUFDSCxTQUFnQixJQUFJLENBQWdDLEVBQUs7SUFDckQsT0FBTyxpQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM1QixDQUFDO0FBRkQsb0JBRUM7QUFFRDs7R0FFRztBQUNILFNBQWdCLE9BQU8sQ0FBQyxFQUFTO0lBQzdCLE9BQU8saUJBQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDL0IsQ0FBQztBQUZELDBCQUVDO0FBRUQ7O0dBRUc7QUFDVSxRQUFBLEtBQUssR0FBOEQscUNBQWlCLENBQUMsS0FBSyxDQUFDO0FBRXhHOztHQUVHO0FBQ0gsU0FBZ0IsUUFBUSxDQUFDLFVBQWdDO0lBQ3JELE9BQU8saUJBQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDeEMsQ0FBQztBQUZELDRCQUVDIn0=