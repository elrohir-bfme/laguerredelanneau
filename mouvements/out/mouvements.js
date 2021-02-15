"use strict";
/** ================ PREREQUIS ================  */
/**
 * Typescript
 * Types pour les nodes
 * tsconfig ==> config pour le compilateur typescript
 * Pour compiler : npx tsc
 * Pour executer : npm run-script runMoves
 */
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
/** ================ IMPORT ================ */
const fs = __importStar(require("fs"));
const node_fetch_1 = __importDefault(require("node-fetch"));
/** ================ SETTING JSON FILE ================ */
node_fetch_1.default('https://api.npoint.io/38a2899b98818d89418c')
    .then((response) => response.json())
    .then(async (data) => {
    const files = [
        "./mouvements/mouvements/orderselfe.txt",
        "./mouvements/mouvements/ordersrohan.txt",
        "./mouvements/mouvements/ordersgondor.txt",
        "./mouvements/mouvements/ordersnain.txt",
        "./mouvements/mouvements/ordersmordor.txt",
        "./mouvements/mouvements/ordersisengard.txt",
        "./mouvements/mouvements/ordersgobelin.txt",
        "./mouvements/mouvements/ordersangmar.txt",
    ];
    const changes = await Promise.all(//Await pour attendre le résultat 
    files.map((file) => fs.promises.readFile(file, { encoding: "utf-8" }).then((content) => content.split("\n").filter((line) => line !== ""))))
        .then((changes) => changes.flat()); //Rassembler les changements dans un fichier
    return Promise.resolve({ data, changes });
})
    .then(({ data, changes }) => updateMoves(data, changes)) //changes : TK territoire1 territoire2 || data
    .then(({ data, changes }) => updatePlayers(data, changes))
    .then((data) => updateColors(data)) // Param, type param , type de retour
    //.then((data :Data): Data => updateFight(data))    
    .then((data) => fs.promises.writeFile("./mouvements/data.json", JSON.stringify(data)))
    .catch((error) => console.error(error));
/**
 * Updates the players's positions
 */
function updateMoves(data, changes) {
    data = changes.reduce((data, change) => {
        const check = /(?<player>.*) spawn (?<faction_id>\d+) (?<to>.*)/;
        if (check.test(change)){
            const res = check.exec(change);
            const [player, faction_id, to] = [res.groups.player, Number.parseInt(res.groups.faction_id), res.groups.to];
            const backupPlayer = {
                name: player,
                faction: faction_id,
                win: 0,
                lose: 0,
                handicap: 0,
                prisonnier: false,
            };
            data[to].players.push(backupPlayer); //Ajouter un joueur
        }else{
            //@ts-ignore
            const [player, from, to] = change.trim().split(" ");
            const players = data[from].players; //Prendre les joueurs dans tout le territoire
            const backupPlayer = players.find((element) => element.name === player); // ! retirer undefined 
            data[from].players.splice(players.indexOf(backupPlayer), 1); //Supprimer le joueur
            data[to].players.push(backupPlayer); //Ajouter un joueur
        }
        return data;
    }, data);
    return { data, changes };
}
/**
 * modify Players
 */
function updatePlayers(data, changes) {
    return data;
}
/**
 *
 */
function updateColors(data) {
    Object.keys(data) // valeur d'un attribut
        .map((key) => key)
        .filter((key) => data[key].hasOwnProperty("players"))
        .filter((territoryKey) => {
        const territory = data[territoryKey];
        const players = territory.players;
        return players.length >= 1 && players.every((player) => player.faction === players[0].faction);
    })
        .forEach((territoryKey) => {
        const territory = data[territoryKey];
        const factions = Object.values(data.factions);
        territory.color = factions.find((faction) => faction.id === territory.players[0].faction).color;
    });
    return data;
}
function updateFight(data) {
    Object.keys(data) // valeur d'un attribut
        .map((key) => key)
        .filter((key) => data[key].hasOwnProperty("players"))
        .filter((territoryKey) => {
        const territory = data[territoryKey];
        const players = territory.players;
        return players.length >= 1 && !(players.every((player) => player.faction === players[0].faction));
    })
        .forEach((territoryKey) => {
        const territory = data[territoryKey];
        territory.fight = "inline";
    });
    return data;
}
/**
 * Function to delete all player in the JSON
 */
// function deleteallPlayer() {
//     for (var item in data) {
//         for (var index of data[item]["players"]) {
//             if (data[item]["players"].length > 0) {
//                 data[item]["players"].splice(0, data[item]["players"].length);
//             }
//         }
//     }
//     writeDataInJSON();
// }
/**
 * Function that put handicap on a player
 * @param {*} playerName The player name
 * @param {*} value The value of the handicap
 */
// function putHandicap(playerName, value) {
// }
/**
 * Function that remove handicap on a player
 * @param {*} playerName The player name
 * @param {*} value The value of the handicap
 */
// function removeHandicap(playerName, value) {
// }
/**
 * Function that move the player with the file "order.txt"
 * @param {string} departure The departure
 * @param {string} destination The destination
 * @param {string} playerName The player name
 * @param {string} handicap The value of handicap
 */
// function editingMove(departure, destination, playerName, handicap) {
//     console.log("C EST BIEN MWA" + playerName)
//     var win = 0;
//     var lose = 0;
//     var faction = 0;
//     var prisonnier = false;
//     for (var item of data) {
//         if (item == departure) {
//             if (departure == "Spawn") arrayPlayer.push(playerName);
//             for (var index of data[item]["players"]) {
//                 if (data[item]["players"][index]["name"] == playerName) {
//                     win = data[item]["players"][index]["win"];
//                     lose = data[item]["players"][index]["lose"];
//                     faction = data[item]["players"][index]["faction"];
//                     prisonnier = data[item]["players"][index]["prisonnier"];
//                     data[item]["players"].splice(index, 1);
//                 }
//             }
//         }
//     }
//     var jsonPlayer = {
//         "name": playerName,
//         "faction": faction,
//         "win": win,
//         "lose": lose,
//         "handicap": 0,
//         "prisonnier": prisonnier
//     }
//     for (var item in data) {
//         if (item == destination) {
//             data[item]["players"].push(jsonPlayer);
//             console.log("OUI")
//         }
//     }
// }
/** ====== IDEA ===== */
// Handicap
// win / lose
// Output : nombre de joueurs ordre invalide : 
// Ajouter les territoires adjacents à chaque terrain 
// Ajouter plusieurs joueurs en une ligne 
// Ajouter
/** =========== TO DO =========== */
//COMMENTER AVEC LES TYPES
// }
/**
 * Function to display all existing territories
 */
// function viewTerritories(data) {
//     for (var item in data) {
//         console.log(item);
//     }
// }
/**
 * Function to display all existing player
 */
// function viewPlayers() {
//     for (var item in data) {
//         for (var index in data[item]["players"]) {
//             console.log(data[item]["players"][index]["name"]);
//         }
//     }
// }
