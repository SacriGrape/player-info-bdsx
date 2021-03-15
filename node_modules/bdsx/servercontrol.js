"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverControl = void 0;
/**
 * @deprecated combined to bedrockServer in launcher.ts
 */
const launcher_1 = require("./launcher");
/**
 * @deprecated use bedrockServer.*
 */
var serverControl;
(function (serverControl) {
    /**
     * @deprecated use bedrockServer.stop()
     */
    function stop() {
        launcher_1.bedrockServer.stop();
    }
    serverControl.stop = stop;
})(serverControl = exports.serverControl || (exports.serverControl = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyY29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlcnZlcmNvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7O0dBRUc7QUFDSCx5Q0FBMkM7QUFFM0M7O0dBRUc7QUFDSCxJQUFpQixhQUFhLENBUTdCO0FBUkQsV0FBaUIsYUFBYTtJQUUxQjs7T0FFRztJQUNILFNBQWdCLElBQUk7UUFDaEIsd0JBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRmUsa0JBQUksT0FFbkIsQ0FBQTtBQUNMLENBQUMsRUFSZ0IsYUFBYSxHQUFiLHFCQUFhLEtBQWIscUJBQWEsUUFRN0IifQ==