"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hacktool = void 0;
const assembler_1 = require("./assembler");
const dll_1 = require("./dll");
var hacktool;
(function (hacktool) {
    /**
     * @param keepRegister
     * @param keepFloatRegister
     * @param tempRegister
     */
    function hookWithCallOriginal(from, to, originalCodeSize, keepRegister, keepFloatRegister, tempRegister) {
        const newcode = assembler_1.asm();
        newcode.saveAndCall(to, keepRegister, keepFloatRegister);
        newcode.write(...from.getBuffer(originalCodeSize));
        if (tempRegister != null)
            newcode.jmp64(from, tempRegister);
        else
            newcode.jmp64_notemp(from.add(originalCodeSize));
        const jumper = assembler_1.asm().jmp64(newcode.alloc(), assembler_1.Register.rax).buffer();
        if (jumper.length > originalCodeSize)
            throw Error(`Too small area to hook, needs=${jumper.length}, originalCodeSize=${originalCodeSize}`);
        from.setBuffer(jumper);
        dll_1.dll.vcruntime140.memset(from.add(jumper.length), 0xcc, originalCodeSize - jumper.length); // fill int3 at remained
    }
    hacktool.hookWithCallOriginal = hookWithCallOriginal;
    /**
     * @deprecated use ProcHacker. it cannot handle jump/call codes.
     */
    function hook(from, to, originalCodeSize, tempRegister) {
        const newcode = assembler_1.asm().write(...from.getBuffer(originalCodeSize));
        if (tempRegister != null)
            newcode.jmp64(from, tempRegister);
        else
            newcode.jmp64_notemp(from.add(originalCodeSize));
        const original = newcode.alloc();
        jump(from, to, assembler_1.Register.rax, originalCodeSize);
        return original;
    }
    hacktool.hook = hook;
    function patch(from, to, tmpRegister, originalCodeSize, call) {
        let jumper;
        if (call) {
            jumper = assembler_1.asm()
                .call64(to, tmpRegister)
                .buffer();
        }
        else {
            jumper = assembler_1.asm()
                .jmp64(to, tmpRegister)
                .buffer();
        }
        if (jumper.length > originalCodeSize)
            throw Error(`Too small area to patch, require=${jumper.length}, actual=${originalCodeSize}`);
        from.setBuffer(jumper);
        dll_1.dll.vcruntime140.memset(from.add(jumper.length), 0x90, originalCodeSize - jumper.length); // fill nop at remained
    }
    hacktool.patch = patch;
    function jump(from, to, tmpRegister, originalCodeSize) {
        const jumper = assembler_1.asm().jmp64(to, tmpRegister).buffer();
        if (jumper.length > originalCodeSize)
            throw Error(`Too small area to patch, require=${jumper.length}, actual=${originalCodeSize}`);
        from.setBuffer(jumper);
        dll_1.dll.vcruntime140.memset(from.add(jumper.length), 0x90, originalCodeSize - jumper.length); // fill nop at remained
    }
    hacktool.jump = jump;
})(hacktool = exports.hacktool || (exports.hacktool = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFja3Rvb2wuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoYWNrdG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBeUU7QUFFekUsK0JBQTRCO0FBRTVCLElBQWlCLFFBQVEsQ0FrRXhCO0FBbEVELFdBQWlCLFFBQVE7SUFFckI7Ozs7T0FJRztJQUNILFNBQWdCLG9CQUFvQixDQUNoQyxJQUFrQixFQUFFLEVBQWMsRUFBRSxnQkFBdUIsRUFDM0QsWUFBdUIsRUFDdkIsaUJBQWlDLEVBQ2pDLFlBQTJCO1FBQzNCLE1BQU0sT0FBTyxHQUFHLGVBQUcsRUFBRSxDQUFDO1FBQ3RCLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3pELE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQUVuRCxJQUFJLFlBQVksSUFBSSxJQUFJO1lBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7O1lBQ3ZELE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFFdEQsTUFBTSxNQUFNLEdBQUcsZUFBRyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxvQkFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ25FLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxnQkFBZ0I7WUFBRSxNQUFNLEtBQUssQ0FBQyxpQ0FBaUMsTUFBTSxDQUFDLE1BQU0sc0JBQXNCLGdCQUFnQixFQUFFLENBQUMsQ0FBQztRQUUxSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZCLFNBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFH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