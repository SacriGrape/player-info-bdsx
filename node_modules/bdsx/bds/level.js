"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerLevel = exports.Level = void 0;
const common_1 = require("bdsx/common");
const nativeclass_1 = require("bdsx/nativeclass");
class Level extends nativeclass_1.NativeClass {
    createDimension(id) {
        common_1.abstract();
    }
    fetchEntity(id, unknown) {
        common_1.abstract();
    }
    getActivePlayerCount() {
        common_1.abstract();
    }
}
exports.Level = Level;
class ServerLevel extends Level {
}
exports.ServerLevel = ServerLevel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV2ZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsZXZlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx3Q0FBdUM7QUFFdkMsa0RBQStDO0FBSy9DLE1BQWEsS0FBTSxTQUFRLHlCQUFXO0lBR2xDLGVBQWUsQ0FBQyxFQUFjO1FBQzFCLGlCQUFRLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFDRCxXQUFXLENBQUMsRUFBZ0IsRUFBRSxPQUFlO1FBQ3pDLGlCQUFRLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFDRCxvQkFBb0I7UUFDaEIsaUJBQVEsRUFBRSxDQUFDO0lBQ2YsQ0FBQztDQUNKO0FBWkQsc0JBWUM7QUFDRCxNQUFhLFdBQVksU0FBUSxLQUFLO0NBR3JDO0FBSEQsa0NBR0MifQ==