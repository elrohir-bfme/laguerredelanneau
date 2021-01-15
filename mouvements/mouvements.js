/** ================ IMPORT ================ */
const fs = require('fs');
const { type } = require('os');
const readline = require('readline');
const fetch = require('node-fetch');

let ELFE_COLOR = "#00bfff";
let ROHAN_COLOR = "#0bff00";
let GONDOR_COLOR = "#1e90ff";
let NAIN_COLOR = "#fffc00";
let MORDOR_COLOR = "#db5461";
let ISENGARD_COLOR = "#ffffff";
let GOBELIN_COLOR = "#ff6f00";
let ANGMAR_COLOR = "#c500ff";

/** ================ SETTING JSON FILE ================ */
let rawdata = fetch('https://api.npoint.io/38a2899b98818d89418c')
.then(function(response){
    return response.json();
})
.then(function(data){
    

    /** ================ READ FILE order.txt and do something every line ================ */
    var elfeFile = readline.createInterface({
        input: fs.createReadStream('./mouvements/mouvements/orderselfe.txt'),
        output: process.stdout,
        console: false
    });

    elfeFile.on('line', function(line) {
        orderArray = line.trim().split(" ");
        editingMove(orderArray[1],orderArray[2],orderArray[0])
    });

    var rohanFile = readline.createInterface({
        input: fs.createReadStream('./mouvements/mouvements/ordersrohan.txt'),
        output: process.stdout,
        console: false
    });

    rohanFile.on('line', function(line) {
        orderArray = line.trim().split(" ");
        editingMove(orderArray[1],orderArray[2],orderArray[0])
    });

    var gondorFile = readline.createInterface({
        input: fs.createReadStream('./mouvements/mouvements/ordersgondor.txt'),
        output: process.stdout,
        console: false
    });

    gondorFile.on('line', function(line) {
        orderArray = line.trim().split(" ");
        editingMove(orderArray[1],orderArray[2],orderArray[0])
    });

    var nainFile = readline.createInterface({
        input: fs.createReadStream('./mouvements/mouvements/ordersnain.txt'),
        output: process.stdout,
        console: false
    });

    nainFile.on('line', function(line) {
        orderArray = line.trim().split(" ");
        editingMove(orderArray[1],orderArray[2],orderArray[0])
    });

    var mordorFile= readline.createInterface({
        input: fs.createReadStream('./mouvements/mouvements/ordersmordor.txt'),
        output: process.stdout,
        console: false
    });

    mordorFile.on('line', function(line) {
        orderArray = line.trim().split(" ");
        editingMove(orderArray[1],orderArray[2],orderArray[0])
    });

    var isengardFile = readline.createInterface({
        input: fs.createReadStream('./mouvements/mouvements/ordersisengard.txt'),
        output: process.stdout,
        console: false
    });

    isengardFile.on('line', function(line) {
        orderArray = line.trim().split(" ");
        editingMove(orderArray[1],orderArray[2],orderArray[0])
    });

    var gobelinFile = readline.createInterface({
        input: fs.createReadStream('./mouvements/mouvements/ordersgobelin.txt'),
        output: process.stdout,
        console: false
    });

    gobelinFile.on('line', function(line) {
        orderArray = line.trim().split(" ");
        editingMove(orderArray[1],orderArray[2],orderArray[0])
    });

    var angmarFile = readline.createInterface({
        input: fs.createReadStream('./mouvements/mouvements/ordersangmar.txt'),
        output: process.stdout,
        console: false
    });

    angmarFile.on('line', function(line) {
        orderArray = line.trim().split(" ");
        editingMove(orderArray[1],orderArray[2],orderArray[0])
    });

    let rawdata2 = fs.readFileSync('./mouvements/data.json')
    let data2 =JSON.parse(rawdata2);

     console.log("pourquoi");
    //updateColor();


    /** ================ FUNCTION ================ */ 

    /**
     * Function to display all existing territories 
     */
    function viewTerritories(){
        for(var item in data){
            console.log(item);
        }
    }

    /**
     * Function to display all existing player 
     */
    function viewPlayers(){
        for(var item in data){
            for(var index in data[item]["players"]){
                console.log(data[item]["players"][index]["name"]);
            }
        }
    }

    /**
     * Update the color of the territories 
     */
    function updateColor(){
        var faction;

        //Identifier la faction (sans croisement)
        for(var item in data2){
            if(data2[item].hasOwnProperty('players') && data2[item]["players"].length > 0){
                faction = data2[item]["players"][0]["faction"];
                for(var index in data2[item]["players"]){
                    if(data2[item]["players"][index]["faction"] != faction){
                        faction = 0;
                    }
                }
                console.log("FACTION VALEURS : " + faction)
                switch(faction){
                    case 1: data2[item]["color"] = ELFE_COLOR; break;
                    case 2: data2[item]["color"] = ROHAN_COLOR; break;
                    case 3: data2[item]["color"] = GONDOR_COLOR; break; 
                    case 4: data2[item]["color"] = NAIN_COLOR; console.log("JE SUIS UN NAIN"); break;
                    case 5: data2[item]["color"] = MORDOR_COLOR; break; 
                    case 6: data2[item]["color"] = ISENGARD_COLOR; break;
                    case 7: data2[item]["color"] = GOBELIN_COLOR; break;
                    case 8: data2[item]["color"] = ANGMAR_COLOR; break;
                    default : ;
                }
            }
        }
        writeDataInJSON2();
    }

    /**
     * Function to delete all player in the JSON 
     */
    function deleteallPlayer(){
        for(var item in data){
                for(var index in data[item]["players"]){
                    if(data[item]["players"].length >0){
                        data[item]["players"].splice(0,data[item]["players"].length);
                    }
                }
        }

        writeDataInJSON();
    }


    /**
     * Function that put handicap on a player 
     * @param {*} playerName The player name
     * @param {*} value The value of the handicap
     */
    function putHandicap(playerName,value){

        for(var item in data){
            for(var index in data[item]["players"]){
                if(data[item]["players"][index]["name"] == playerName){
                    data[item]["players"][index]["handicap"] = value;
                }
            }
        }
        writeDataInJSON();
    }

    /**
     * Function that remove handicap on a player 
     * @param {*} playerName The player name
     * @param {*} value The value of the handicap
     */
    function removeHandicap(playerName,value){

    }

    /**
     * Function that move the player with the file "order.txt"
     * @param {*} departure The departure
     * @param {*} destination The destination
     * @param {*} playerName The player name
     * @param {*} handicap The value of handicap 
     */
    function editingMove(departure,destination,playerName,handicap){

        console.log("C EST BIEN MWA" + playerName)
        var win =0; 
        var lose =0;
        var faction =0;
        var prisonnier = false;

        for(var item in data){
            if(item == departure){
                if(departure == "Spawn") arrayPlayer.push(playerName);
                for(var index in data[item]["players"]){
                    if(data[item]["players"][index]["name"] == playerName){
                        win = data[item]["players"][index]["win"];
                        lose = data[item]["players"][index]["lose"];
                        faction = data[item]["players"][index]["faction"];
                        prisonnier = data[item]["players"][index]["prisonnier"];
                        data[item]["players"].splice(index,1);
                    }
                }
            }
        }


        var jsonPlayer = {
            "name": playerName,
            "faction": faction,
            "win": win,
            "lose": lose,
            "handicap": 0,
            "prisonnier" : prisonnier
        }
        

        for(var item in data){
            if(item == destination){
                data[item]["players"].push(jsonPlayer);
                console.log("OUI")
            }
        }

        writeDataInJSON();
    }

    /**
     * Function that write new data un JSON file
     */
    function writeDataInJSON(){
        const datas = JSON.stringify(data)
        fs.writeFile('./mouvements/data.json', datas, 'utf8', (err) => {
        if (err) console.log(`Error writing file: ${err}`);
        });
    }

        /**
     * Function that write new data un JSON file
     */
    function writeDataInJSON2(){
        const datas = JSON.stringify(data2)
        fs.writeFile('./mouvements/data.json', datas, 'utf8', (err) => {
        if (err) console.log(`Error writing file: ${err}`);
        });
    }

        /** ====== IDEA ===== */
        // Handicap
        // win / lose
        // Output : nombre de joueurs ordre invalide : 
        // Ajouter les territoires adjacents à chaque terrain 
        // Ajouter plusieurs joueurs en une ligne 
        // Ajouter 

    // }

})



