"use strict";
if (!Promise.prototype.finally) {
    Promise.prototype.finally = function (onfinally) {
        async function voiding(value) {
            if (!onfinally)
                return;
            onfinally();
            return value;
        }
        return this.then(voiding, voiding);
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWZpbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwb2x5ZmlsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFO0lBQzVCLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLFVBQTZCLFNBQTJDO1FBQ2hHLEtBQUssVUFBVSxPQUFPLENBQUMsS0FBUztZQUM1QixJQUFJLENBQUMsU0FBUztnQkFBRSxPQUFPO1lBQ3ZCLFNBQVMsRUFBRSxDQUFDO1lBQ1osT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDO0NBQ0wifQ==