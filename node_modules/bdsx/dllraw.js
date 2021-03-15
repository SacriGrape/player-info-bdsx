"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dllraw = void 0;
const core_1 = require("./core");
var dllraw;
(function (dllraw) {
    let kernel32;
    (function (kernel32) {
        kernel32.module = core_1.cgate.GetModuleHandleW('kernel32.dll');
        kernel32.GetCurrentThreadId = core_1.cgate.GetProcAddress(kernel32.module, 'GetCurrentThreadId');
        kernel32.Sleep = core_1.cgate.GetProcAddress(kernel32.module, 'Sleep');
    })(kernel32 = dllraw.kernel32 || (dllraw.kernel32 = {}));
    let vcruntime140;
    (function (vcruntime140) {
        vcruntime140.module = core_1.cgate.GetModuleHandleW('vcruntime140.dll');
        vcruntime140.memcpy = core_1.cgate.GetProcAddress(vcruntime140.module, 'memcpy');
    })(vcruntime140 = dllraw.vcruntime140 || (dllraw.vcruntime140 = {}));
    let ucrtbase;
    (function (ucrtbase) {
        ucrtbase.module = core_1.cgate.GetModuleHandleW('ucrtbase.dll');
        ucrtbase.malloc = core_1.cgate.GetProcAddress(ucrtbase.module, 'malloc');
    })(ucrtbase = dllraw.ucrtbase || (dllraw.ucrtbase = {}));
})(dllraw = exports.dllraw || (exports.dllraw = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGxscmF3LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGxscmF3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlDQUErQjtBQUcvQixJQUFpQixNQUFNLENBZXRCO0FBZkQsV0FBaUIsTUFBTTtJQUVuQixJQUFpQixRQUFRLENBSXhCO0lBSkQsV0FBaUIsUUFBUTtRQUNSLGVBQU0sR0FBRyxZQUFLLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDaEQsMkJBQWtCLEdBQUcsWUFBSyxDQUFDLGNBQWMsQ0FBQyxTQUFBLE1BQU0sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3hFLGNBQUssR0FBRyxZQUFLLENBQUMsY0FBYyxDQUFDLFNBQUEsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQy9ELENBQUMsRUFKZ0IsUUFBUSxHQUFSLGVBQVEsS0FBUixlQUFRLFFBSXhCO0lBQ0QsSUFBaUIsWUFBWSxDQUc1QjtJQUhELFdBQWlCLFlBQVk7UUFDWixtQkFBTSxHQUFHLFlBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3BELG1CQUFNLEdBQUcsWUFBSyxDQUFDLGNBQWMsQ0FBQyxhQUFBLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNqRSxDQUFDLEVBSGdCLFlBQVksR0FBWixtQkFBWSxLQUFaLG1CQUFZLFFBRzVCO0lBQ0QsSUFBaUIsUUFBUSxDQUd4QjtJQUhELFdBQWlCLFFBQVE7UUFDUixlQUFNLEdBQUcsWUFBSyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2hELGVBQU0sR0FBRyxZQUFLLENBQUMsY0FBYyxDQUFDLFNBQUEsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2pFLENBQUMsRUFIZ0IsUUFBUSxHQUFSLGVBQVEsS0FBUixlQUFRLFFBR3hCO0FBQ0wsQ0FBQyxFQWZnQixNQUFNLEdBQU4sY0FBTSxLQUFOLGNBQU0sUUFldEIifQ==