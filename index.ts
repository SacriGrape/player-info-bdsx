
import { CANCEL, MinecraftPacketIds, nethook, NetworkIdentifier } from "bdsx";
import { DisconnectPacket } from "bdsx/bds/packets";
import { events } from "bdsx/event";
import { isFile } from "bdsx/util";
import { appendFileSync, readFileSync, writeFileSync, mkdirSync } from "fs";

mkdirSync("../playerinfo", { recursive: true });

let tempUsernames: any = {}; // used for holding the ni and UUID of a player until their are init

export function getPlayerInfo(name: string) { // Takes in a name and outputs the player info
    let uuid = nameToUuid(name);
    let path = getPlayerInfoPath(uuid);
    return parseJSON(path);
}

export function nameToUuid(name: string) { // Takes in the name and retunrs UUID
    let usernameInfo = parseJSON("../usernames.json");
    return usernameInfo[name];
};

// internal function declaration
function getPlayerInfoPath(uuid: string) { // outputs the path of player info by taking in a UUID
    return `../playerinfo/${uuid}.json`;
}

function initJSON(path: string) { // Creates file with just empty brackets
    appendFileSync(path, "{}");
}

function parseJSON(path: string) { // Reads the JSON file at the path given
    initJSONifNotExist(path);
    return JSON.parse(readFileSync(path, "utf8"));
}

function initJSONifNotExist(path: string) { // Creates a json file if it does not exist
    if (!isFile(path)) {
        initJSON(path);
    }
}

function writeJSON(path: string, data: string) { // writes data to a file specified at the given path
    initJSONifNotExist(path);
    writeFileSync(path, JSON.stringify(data));
}

nethook.after(MinecraftPacketIds.Login).on((pk, ni) => {
    // Get UUID on player init
    let cert = pk.connreq.cert;
    let uuid = cert.json.value()["extraData"]["identity"];
    tempUsernames[ni.toString()] = uuid; // put UUID into tempUsernames with its ni for later usernames.json use
});

events.playerJoin.on((event) => {
    // check to see that ni is in tempUsernames
    let niList = Object.keys(tempUsernames);
    let actor = event.player;
    let ni = actor.getNetworkIdentifier();
    let uuid = "";
    let uuidIndex = niList.indexOf(ni.toString());
    if (uuidIndex === -1) { // Checking to see that the uuid can even be recorded
        // kicks the player in the instance the UUID fails to get recorded
        let kickPacket = DisconnectPacket.create();
        kickPacket.message = "Your UUID failed to be recorded. \nTry to connect again or contact server admin";
        kickPacket.sendTo(ni);
        kickPacket.dispose();
        console.log(`[ERROR] ${actor.getName()}'s UUID failed to be recorded, kicked`);
        return CANCEL;
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
