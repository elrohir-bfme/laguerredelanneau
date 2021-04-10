import fetch from "node-fetch";
import * as fs from "fs";


import { Data } from "./Data";
import { Territory } from "./Territory";
import { Player } from "./Player";
import { Faction } from "./Faction";


type T = {data: Data, changes: string[]};


fetch('https://api.npoint.io/38a2899b98818d89418c')
.then((response): Promise<Data> => response.json() as Promise<Data>)
.then(async (data: Data): Promise<T> => {
    const files = [
        "./mouvements/mouvements/ordersall.txt",
    ];


    const changes = await Promise.all(      //Await pour attendre le résultat 
        files.map((file) => fs.promises.readFile(file, {encoding: "utf-8"}).then((content: string) => content.split("\n").filter((line: string) => line !== "")))
    )    
    .then((changes: string[][]) => changes.flat()); //Rassembler les changements dans un fichier
    return Promise.resolve({data, changes});
})
.then(({data, changes}: T): Data => updateMoves(data, changes))
.then((data :Data): Data => updateColors(data))
.then((data :Data): Data => updateFight(data))
.then((data: Data) => fs.promises.writeFile("./mouvements/data.json", JSON.stringify(data)))

function updateMoves(data : Data,changes : string[]) : Data {
    data = changes.reduce((data: Data, change: string): Data => {

        const args = change.split(' ');
        if(args[0] === "spawn"){
            //@ts-ignore
            const [spawn, player, region, faction]: [string, string, keyof Data, string] = change.trim().split(" ");
            const backupPlayer = {
                name: player,
                faction: parseInt(faction),
                win: 0,
                lose: 0,
                handicap: 0,
                prisonnier: false,
            };
            (data[region] as Territory).players.push(backupPlayer); //Ajouter un joueur
        }else{
            //@ts-ignore
            const [player, from, to]: [string, keyof Data, keyof Data] = change.trim().split(" ");
            const players: Player[] = (data[from] as Territory).players; //Prendre les joueurs dans tout le territoire
            const backupPlayer: Player = players.find((element: Player) => element.name === player)!; // ! retirer undefined 
            if (backupPlayer.handicap > 0) {
                backupPlayer.handicap = backupPlayer.handicap-1
            }
            (data[from] as Territory).players.splice(players.indexOf(backupPlayer), 1); //Supprimer le joueur
            (data[to] as Territory).players.push(backupPlayer); //Ajouter un joueur
        }
        return data;
    },data);
    return data
}

function factionColor(color: String): Number {
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

function checkAlliance(alliance: String[], factionA: Number, factionB: Number): Boolean {
    let res = false;

    // console.log(alliance)
    // console.log(factionA, factionName(factionA), factionName(factionB), factionB)

    alliance.forEach(e => {
        if(e.includes(factionName(factionA)) && e.includes(factionName(factionB))) {
            res = true
        }
    });
    return res
}

function updateColors(data: Data): Data {
    Object.keys(data) 
    .map((key) => key as keyof Data)
    .filter((key): boolean => data[key].hasOwnProperty("players"))
    .filter((territoryKey) => {
        const territory: Territory = (data[territoryKey] as Territory);
        const players: Player[] = territory.players;
        console.log(players);

        return players.length > 0 
        && players.every((player: Player) => player.faction === players[0].faction) 
        !== players.every(() => checkAlliance(data["Alliance"], factionColor(territory.color), players[0].faction)); 
    })
    .forEach((territoryKey: keyof Data) => {
        const territory: Territory = (data[territoryKey] as Territory);
        // console.log(territory)
        const factions: Faction[] = Object.values(data.factions);
        territory.color = factions.find((faction) => faction.id === territory.players[0].faction)!.color;
    });
    return data;
}

function factionName(faction: Number): string {
    let value = "";
    switch (faction) {
        case  1: value = "elfe"; break;
        case  2: value = "rohan"; break;
        case  3: value = "gondor"; break;
        case  4: value = "nain"; break;
        case  5: value = "mordor"; break;
        case  6: value = "isengard"; break;
        case  7: value = "gobelin"; break;
        case  8: value = "angmar"; break;
        default : console.log("No faction selected");
    }
    return value;
}

function updateFight(data: Data): Data {
    Object.keys(data) 
    .map((key) => key as keyof Data)
    .filter((key): boolean => data[key].hasOwnProperty("players"))
    .forEach((territoryKey: keyof Data) => {
        const territory: Territory = (data[territoryKey] as Territory);
        const players: Player[] = territory.players;

        if(players.every((player: Player) => checkAlliance(data["Alliance"], player.faction, players[0].faction))){
            territory.fight = "hidden";
        }else{
            territory.fight = "inline";
        }
    });
    return data;
}