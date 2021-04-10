"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const fs = __importStar(require("fs"));
node_fetch_1.default('https://api.npoint.io/38a2899b98818d89418c')
    .then((response) => response.json())
    .then(async (data) => {
    const files = [
        "./mouvements/mouvements/ordersall.txt",
    ];
    const changes = await Promise.all(//Await pour attendre le résultat 
    files.map((file) => fs.promises.readFile(file, { encoding: "utf-8" }).then((content) => content.split("\n").filter((line) => line !== ""))))
        .then((changes) => changes.flat()); //Rassembler les changements dans un fichier
    return Promise.resolve({ data, changes });
})
    .then(({ data, changes }) => updateMoves(data, changes))
    .then((data) => updateColors(data))
    .then((data) => updateFight(data))
    .then((data) => fs.promises.writeFile("./mouvements/data.json", JSON.stringify(data)));
function updateMoves(data, changes) {
    data = changes.reduce((data, change) => {
        const args = change.split(' ');
        if (args[0] === "spawn") {
            //@ts-ignore
            const [spawn, player, region, faction] = change.trim().split(" ");
            const backupPlayer = {
                name: player,
                faction: parseInt(faction),
                win: 0,
                lose: 0,
                handicap: 0,
                prisonnier: false,
            };
            data[region].players.push(backupPlayer); //Ajouter un joueur
        }
        else {
            //@ts-ignore
            const [player, from, to] = change.trim().split(" ");
            const players = data[from].players; //Prendre les joueurs dans tout le territoire
            const backupPlayer = players.find((element) => element.name === player); // ! retirer undefined 
            if (backupPlayer.handicap > 0) {
                backupPlayer.handicap = backupPlayer.handicap - 1;
            }
            data[from].players.splice(players.indexOf(backupPlayer), 1); //Supprimer le joueur
            data[to].players.push(backupPlayer); //Ajouter un joueur
        }
        return data;
    }, data);
    return data;
}
function factionColor(color) {
    let value = 1;
    switch (color) {
        case '#00bfff':
        case '#00BFFF':
            value = 1;
            break;
        case '#0bff00':
        case '#0BFF00':
            value = 2;
            break;
        case '#1e90ff':
        case '#1E90FF':
            value = 3;
            break;
        case '#fffc00':
        case '#FFFC00':
            value = 4;
            break;
        case '#db5461':
        case '#DB5461':
            value = 5;
            break;
        case '#ffffff':
        case '#FFFFFF':
            value = 6;
            break;
        case '#ff6f00':
        case '#FF6F00':
            value = 7;
            break;
        case '#c500ff':
        case '#C500FF':
            value = 8;
            break;
        default:
            break;
    }
    return value;
}
function checkAlliance(alliance, factionA, factionB) {
    let res = false;
    // console.log(alliance)
    // console.log(factionA, factionName(factionA), factionName(factionB), factionB)
    alliance.forEach(e => {
        if (e.includes(factionName(factionA)) && e.includes(factionName(factionB))) {
            res = true;
        }
    });
    return res;
}
function updateColors(data) {
    Object.keys(data)
        .map((key) => key)
        .filter((key) => data[key].hasOwnProperty("players"))
        .filter((territoryKey) => {
        const territory = data[territoryKey];
        const players = territory.players;
        console.log(players);
        return players.length > 0
            && players.every((player) => player.faction === players[0].faction)
                !== players.every(() => checkAlliance(data["Alliance"], factionColor(territory.color), players[0].faction));
    })
        .forEach((territoryKey) => {
        const territory = data[territoryKey];
        // console.log(territory)
        const factions = Object.values(data.factions);
        territory.color = factions.find((faction) => faction.id === territory.players[0].faction).color;
    });
    return data;
}
function factionName(faction) {
    let value = "";
    switch (faction) {
        case 1:
            value = "elfe";
            break;
        case 2:
            value = "rohan";
            break;
        case 3:
            value = "gondor";
            break;
        case 4:
            value = "nain";
            break;
        case 5:
            value = "mordor";
            break;
        case 6:
            value = "isengard";
            break;
        case 7:
            value = "gobelin";
            break;
        case 8:
            value = "angmar";
            break;
        default: console.log("No faction selected");
    }
    return value;
}
function updateFight(data) {
    Object.keys(data)
        .map((key) => key)
        .filter((key) => data[key].hasOwnProperty("players"))
        .forEach((territoryKey) => {
        const territory = data[territoryKey];
        const players = territory.players;
        if (players.every((player) => checkAlliance(data["Alliance"], player.faction, players[0].faction))) {
            territory.fight = "hidden";
        }
        else {
            territory.fight = "inline";
        }
    });
    return data;
}
