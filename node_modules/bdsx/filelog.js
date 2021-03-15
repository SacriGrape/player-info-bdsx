"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileLog = void 0;
const fs = require("fs");
const path = require("path");
const util_1 = require("./util");
class FileLog {
    constructor(filepath) {
        this.appending = '';
        this.flushing = false;
        this.path = path.resolve(filepath);
    }
    _flush() {
        fs.appendFile(this.path, this.appending, () => {
            if (this.appending !== '') {
                this._flush();
            }
            else {
                this.flushing = false;
            }
        });
        this.appending = '';
    }
    log(...message) {
        this.appending += message.map(util_1.anyToString).join(' ');
        if (!this.flushing) {
            this.flushing = true;
            this._flush();
        }
    }
}
exports.FileLog = FileLog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZWxvZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGVsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EseUJBQTBCO0FBQzFCLDZCQUE4QjtBQUM5QixpQ0FBcUM7QUFFckMsTUFBYSxPQUFPO0lBTWhCLFlBQVksUUFBZTtRQUhuQixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUdyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVPLE1BQU07UUFDVixFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFFLEVBQUU7WUFDekMsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLEVBQUUsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ2pCO2lCQUFNO2dCQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2FBQ3pCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsR0FBRyxDQUFDLEdBQUcsT0FBYTtRQUNoQixJQUFJLENBQUMsU0FBUyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDakI7SUFDTCxDQUFDO0NBQ0o7QUE1QkQsMEJBNEJDIn0=