"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashedString = void 0;
const tslib_1 = require("tslib");
const core_1 = require("bdsx/core");
const nativeclass_1 = require("bdsx/nativeclass");
const nativetype_1 = require("bdsx/nativetype");
const proc_1 = require("./proc");
let HashedString = class HashedString extends nativeclass_1.NativeClass {
    [nativetype_1.NativeType.ctor]() {
        this.hash = null;
    }
    set(str) {
        this.str = str;
        this.hash = computeHash(this.add(str_offset));
    }
};
tslib_1.__decorate([
    nativeclass_1.nativeField(core_1.VoidPointer)
], HashedString.prototype, "hash", void 0);
tslib_1.__decorate([
    nativeclass_1.nativeField(nativetype_1.CxxString)
], HashedString.prototype, "str", void 0);
HashedString = tslib_1.__decorate([
    nativeclass_1.nativeClass()
], HashedString);
exports.HashedString = HashedString;
const str_offset = HashedString.offsetOf('str');
const computeHash = proc_1.procHacker.js('?computeHash@HashedString@@SA_KAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@@Z', core_1.VoidPointer, null, core_1.VoidPointer);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzaGVkc3RyaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGFzaGVkc3RyaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxvQ0FBd0M7QUFDeEMsa0RBQXlFO0FBQ3pFLGdEQUF3RDtBQUN4RCxpQ0FBb0M7QUFHcEMsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBYSxTQUFRLHlCQUFXO0lBTXpDLENBQUMsdUJBQVUsQ0FBQyxJQUFJLENBQUM7UUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsR0FBRyxDQUFDLEdBQVU7UUFDVixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDO0NBQ0osQ0FBQTtBQVpHO0lBREMseUJBQVcsQ0FBQyxrQkFBVyxDQUFDOzBDQUNIO0FBRXRCO0lBREMseUJBQVcsQ0FBQyxzQkFBUyxDQUFDO3lDQUNUO0FBSkwsWUFBWTtJQUR4Qix5QkFBVyxFQUFFO0dBQ0QsWUFBWSxDQWN4QjtBQWRZLG9DQUFZO0FBZXpCLE1BQU0sVUFBVSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDaEQsTUFBTSxXQUFXLEdBQUcsaUJBQVUsQ0FBQyxFQUFFLENBQUMsb0dBQW9HLEVBQUUsa0JBQVcsRUFBRSxJQUFJLEVBQUUsa0JBQVcsQ0FBQyxDQUFDIn0=