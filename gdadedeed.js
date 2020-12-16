
/** ================ IMPORT ================ */
const fs = require('fs');
const { type } = require('os');
const readline = require('readline');


/** ================ SETTING JSON FILE ================ */
let rawdata = fs.readFileSync('data.json')
let data =JSON.parse(rawdata);

/** ================ ARRAY ================ */
let arrayTerritories = ["Spawn","Rhun","Erech","Khand"];
let arrayPlayer = ["PlayerToRhun","PlayerToErech"];


/** ================ READ FILE order.txt and do something every line ================ */
var rd = readline.createInterface({
    input: fs.createReadStream('order.txt'),
    output: process.stdout,
    console: false
});


rd.on('line', function(line) {
    orderArray = line.trim().split(" ");
    
    if(validArgument(orderArray[0],orderArray[1],orderArray[2])){
        editingMove(orderArray[0],orderArray[1],orderArray[2])
    }else{
        //clean le fichier 
        fs.appendFile('mistakeOrder.txt',orderArray[0]+" "+orderArray[1]+" "+orderArray[2]+"\n", function(err) {
            if (err) return console.error(err);
        });
    } 
});

/** ================ FUNCTION ================ */ 

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
 * Function that check if the argument is valid 
 * @param {*} departure The departure
 * @param {*} destination The destination 
 * @param {*} playerName The player name
 */
function validArgument(departure,destination,playerName){
   return Boolean(arrayTerritories.includes(departure,destination)) && Boolean(arrayPlayer.includes(playerName));
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
                var win = data[item]["players"][index]["win"];
                var lose = data[item]["players"][index]["lose"];
                var faction = data[item]["players"][index]["faction"];
                data[item]["players"].splice(index,1);
            }
        }
    }
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


    var win =0; 
    var lose =0;
    var faction =0;

    for(var item in data){
        if(data[item]["name"] == departure){
            for(var index in data[item]["players"]){
                if(data[item]["players"][index]["name"] == playerName){
                     win = data[item]["players"][index]["win"];
                     lose = data[item]["players"][index]["lose"];
                     faction = data[item]["players"][index]["faction"];
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
        "handicap": 0
    }
    

    for(var item in data){
        if(data[item]["name"] == destination) data[item]["players"].push(jsonPlayer);
    }

    writeDataInJSON();
}

    /** ====== IDEA ===== */
    // Si tu veux faire une verification de territoire , tu vas devoir ajouter pour chaque element les territoires adjacents 
    // handicap 
    // win / lose
    // verifier les paramètres 
    // Output : nombre de joueurs ordre invalide : 
    // Ajouter les territoires adjacents à chaque terrain 

    /**
     * Function that write new data un JSON file
     */
function writeDataInJSON(){
    const datas = JSON.stringify(data)
    fs.writeFile('data.json', datas, 'utf8', (err) => {
    if (err) console.log(`Error writing file: ${err}`);
    });
}


