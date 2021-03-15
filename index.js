"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nameToUuid = exports.getPlayerInfo = void 0;
const bdsx_1 = require("bdsx");
const packets_1 = require("bdsx/bds/packets");
const event_1 = require("bdsx/event");
const util_1 = require("bdsx/util");
const fs_1 = require("fs");
fs_1.mkdirSync("../playerinfo", { recursive: true });
let tempUsernames = {}; // used for holding the ni and UUID of a player until their are init
function getPlayerInfo(name) {
    let uuid = nameToUuid(name);
    let path = getPlayerInfoPath(uuid);
    return parseJSON(path);
}
exports.getPlayerInfo = getPlayerInfo;
function nameToUuid(name) {
    let usernameInfo = parseJSON("../usernames.json");
    return usernameInfo[name];
}
exports.nameToUuid = nameToUuid;
;
// internal function declaration
function getPlayerInfoPath(uuid) {
    return `../playerinfo/${uuid}.json`;
}
function initJSON(path) {
    fs_1.appendFileSync(path, "{}");
}
function parseJSON(path) {
    initJSONifNotExist(path);
    return JSON.parse(fs_1.readFileSync(path, "utf8"));
}
function initJSONifNotExist(path) {
    if (!util_1.isFile(path)) {
        initJSON(path);
    }
}
function writeJSON(path, data) {
    initJSONifNotExist(path);
    fs_1.writeFileSync(path, JSON.stringify(data));
}
bdsx_1.nethook.after(bdsx_1.MinecraftPacketIds.Login).on((pk, ni) => {
    // Get UUID on player init
    let cert = pk.connreq.cert;
    let uuid = cert.json.value()["extraData"]["identity"];
    tempUsernames[ni.toString()] = uuid; // put UUID into tempUsernames with its ni for later usernames.json use
});
event_1.events.playerJoin.on((event) => {
    // check to see that ni is in tempUsernames
    let niList = Object.keys(tempUsernames);
    let actor = event.player;
    let ni = actor.getNetworkIdentifier();
    let uuid = "";
    let uuidIndex = niList.indexOf(ni.toString());
    if (uuidIndex === -1) { // Checking to see that the uuid can even be recorded
        // kicks the player in the instance the UUID fails to get recorded
        let kickPacket = packets_1.DisconnectPacket.create();
        kickPacket.message = "Your UUID failed to be recorded. \nTry to connect again or contact server admin";
        kickPacket.sendTo(ni);
        kickPacket.dispose();
        console.log(`[ERROR] ${actor.getName()}'s UUID failed to be recorded, kicked`);
        return bdsx_1.CANCEL;
    }
    // gets the UUID and parses username info
    let niString = niList[uuidIndex];
    uuid = tempUsernames[niString];
    let usernameInfo = parseJSON("../usernames.json");
    // checks to see if UUID was already in the list
    let previousUsername = Object.keys(usernameInfo).find(key => usernameInfo[key] === uuid);
    if (previousUsername !== undefined) {
        delete usernameInfo[previousUsername];
    }
    // adds username to usernameInfo.
    usernameInfo[actor.getName()] = uuid;
    // writes to the json
    writeJSON("../usernames.json", usernameInfo);
    // Parses player info
    let playerPath = getPlayerInfoPath(uuid);
    let playerInfo = parseJSON(playerPath);
    // records basic info.
    let baseKeys = Object.keys(playerInfo);
    if (!("basic" in baseKeys)) {
        playerInfo.basic = {};
    }
    let ipPort = ni.toString().trim().split("|");
    playerInfo.basic.name = actor.getName();
    playerInfo.basic.ip = ipPort[0];
    playerInfo.basic.port = ipPort[1];
    writeJSON(playerPath, playerInfo);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwrQkFBOEU7QUFDOUUsOENBQW9EO0FBQ3BELHNDQUFvQztBQUNwQyxvQ0FBbUM7QUFDbkMsMkJBQTRFO0FBRTVFLGNBQVMsQ0FBQyxlQUFlLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUVoRCxJQUFJLGFBQWEsR0FBUSxFQUFFLENBQUMsQ0FBQyxvRUFBb0U7QUFFakcsU0FBZ0IsYUFBYSxDQUFDLElBQVk7SUFDdEMsSUFBSSxJQUFJLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLElBQUksSUFBSSxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzNCLENBQUM7QUFKRCxzQ0FJQztBQUVELFNBQWdCLFVBQVUsQ0FBQyxJQUFZO0lBQ25DLElBQUksWUFBWSxHQUFHLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2xELE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzlCLENBQUM7QUFIRCxnQ0FHQztBQUFBLENBQUM7QUFFRixnQ0FBZ0M7QUFDaEMsU0FBUyxpQkFBaUIsQ0FBQyxJQUFZO0lBQ25DLE9BQU8saUJBQWlCLElBQUksT0FBTyxDQUFDO0FBQ3hDLENBQUM7QUFFRCxTQUFTLFFBQVEsQ0FBQyxJQUFZO0lBQzFCLG1CQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQy9CLENBQUM7QUFFRCxTQUFTLFNBQVMsQ0FBQyxJQUFZO0lBQzNCLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBWSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ2xELENBQUM7QUFFRCxTQUFTLGtC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QUM7SUFFdkMsc0JBQXNCO0lBQ3RCLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdkMsSUFBSSxDQUFDLENBQUMsT0FBTyxJQUFJLFFBQVEsQ0FBQyxFQUFFO1FBQ3hCLFVBQVUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0tBQ3pCO0lBQ0QsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUU3QyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVsQyxTQUFTLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ3RDLENBQUMsQ0FBQyxDQUFDIn0=