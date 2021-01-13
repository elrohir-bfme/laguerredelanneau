/** ================ IMPORT ================ */
const fs = require('fs');
const { type } = require('os');
const readline = require('readline');
const fetch = require('node-fetch');

/** ================ SETTING JSON FILE ================ */
let rawdata = fetch('https://api.npoint.io/38a2899b98818d89418c')
.then(function(response){
    return response.json();
})
.then(function(data){
    

    /** ================ READ FILE order.txt and do something every line ================ */
    var elfeFile = readline.createInterface({
        input: fs.createReadStream('./static/mouvements/orderselfe.txt'),
        output: process.stdout,
        console: false
    });

    elfeFile.on('line', function(line) {
        orderArray = line.trim().split(" ");
        editingMove(orderArray[1],orderArray[2],orderArray[0])
    });

    var rohanFile = readline.createInterface({
        input: fs.createReadStream('./static/mouvements/ordersrohan.txt'),
        output: process.stdout,
        console: false
    });

    rohanFile.on('line', function(line) {
        orderArray = line.trim().split(" ");
        editingMove(orderArray[1],orderArray[2],orderArray[0])
    });

    var gondorFile = readline.createInterface({
        input: fs.createReadStream('./static/mouvements/ordersgondor.txt'),
        output: process.stdout,
        console: false
    });

    gondorFile.on('line', function(line) {
        orderArray = line.trim().split(" ");
        editingMove(orderArray[1],orderArray[2],orderArray[0])
    });

    var nainFile = readline.createInterface({
        input: fs.createReadStream('./static/mouvements/ordersnain.txt'),
        output: process.stdout,
        console: false
    });

    nainFile.on('line', function(line) {
        orderArray = line.trim().split(" ");
        editingMove(orderArray[1],orderArray[2],orderArray[0])
    });

    var mordorFile= readline.createInterface({
        input: fs.createReadStream('./static/mouvements/ordersmordor.txt'),
        output: process.stdout,
        console: false
    });

    mordorFile.on('line', function(line) {
        orderArray = line.trim().split(" ");
        editingMove(orderArray[1],orderArray[2],orderArray[0])
    });

    var isengardFile = readline.createInterface({
        input: fs.createReadStream('./static/mouvements/ordersisengard.txt'),
        output: process.stdout,
        console: false
    });

    isengardFile.on('line', function(line) {
        orderArray = line.trim().split(" ");
        editingMove(orderArray[1],orderArray[2],orderArray[0])
    });

    var gobelinFile = readline.createInterface({
        input: fs.createReadStream('./static/mouvements/ordersgobelin.txt'),
        output: process.stdout,
        console: false
    });

    gobelinFile.on('line', function(line) {
        orderArray = line.trim().split(" ");
        editingMove(orderArray[1],orderArray[2],orderArray[0])
    });

    var angmarFile = readline.createInterface({
        input: fs.createReadStream('./static/mouvements/ordersangmar.txt'),
        output: process.stdout,
        console: false
    });

    angmarFile.on('line', function(line) {
        orderArray = line.trim().split(" ");
        editingMove(orderArray[1],orderArray[2],orderArray[0])
    });

    

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
     * Function to change color of a territories
     */

     function updateColor(){
         
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
        fs.writeFile('./static/mouvements/data.json', datas, 'utf8', (err) => {
        if (err) console.log(`Error writing file: ${err}`);
        });
    }

        /** ====== IDEA ===== */
        // Handicap
        // win / lose
        // Output : nombre de joueurs ordre invalide : 
        // Ajouter les territoires adjacents à chaque terrain 
        // Ajouter plusieurs joueurs en une ligne 

    // }

})



