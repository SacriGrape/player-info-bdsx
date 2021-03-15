"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const makefunc_defines_1 = require("../makefunc_defines");
const assembler_1 = require("../assembler");
const source_map_support_1 = require("../source-map-support");
const textparser_1 = require("../textparser");
const path = require("path");
const fs = require("fs");
try {
    console.log(`[bdsx-asm] start`);
    const code = assembler_1.asm();
    const asmpath = path.join(__dirname, './asmcode.asm');
    code.compile(fs.readFileSync(asmpath, 'utf8'), makefunc_defines_1.makefuncDefines, asmpath);
    fs.writeFileSync(path.join(__dirname, './asmcode.ts'), code.toTypeScript());
    console.log(`[bdsx-asm] done. no errors`);
}
catch (err) {
    if (!(err instanceof textparser_1.ParsingError)) {
        console.error(source_map_support_1.remapError(err).stack);
    }
    else {
        console.log(`[bdsx-asm] failed`);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbXBpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwwREFBc0Q7QUFDdEQsNENBQW1DO0FBQ25DLDhEQUFtRDtBQUNuRCw4Q0FBNkM7QUFDN0MsNkJBQThCO0FBQzlCLHlCQUEwQjtBQUUxQixJQUFJO0lBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ2hDLE1BQU0sSUFBSSxHQUFHLGVBQUcsRUFBRSxDQUFDO0lBQ25CLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ3RELElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEVBQUUsa0NBQWUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN6RSxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLGNBQWMsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQzVFLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztDQUM3QztBQUFDLE9BQU8sR0FBRyxFQUFFO0lBQ1YsSUFBSSxDQUFDLENBQUMsR0FBRyxZQUFZLHlCQUFZLENBQUMsRUFBRTtRQUNoQyxPQUFPLENBQUMsS0FBSyxDQUFDLCtCQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDeEM7U0FBTTtRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztLQUNwQztDQUNKIn0=