const fs = require('fs');

let rawdata = fs.readFileSync('data.json')
let data =JSON.parse(rawdata);


function deleteallPlayer(){
    for(var item in data){
      console.log(item);
      data[item]["color"] = "#3300000";
    }

    const datas = JSON.stringify(data)
    fs.writeFile('data2.json', datas, 'utf8', (err) => {
    if (err) console.log(`Error writing file: ${err}`);
    });

}

deleteallPlayer()