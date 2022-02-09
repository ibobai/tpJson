
// To read json files in javascript
const fs = require('fs');
let rawdata = fs.readFileSync("/home/ibobai/Simplon/Projets/Tp/tpJson/tp1.json");
let student = JSON.parse(rawdata);
console.log(student);


const file = require("file");
let data = file.readFileSync("/home/ibobai/Simplon/Projets/Tp/tpJson/tp1.json");
let dataList = JSON.parse(data);
console.log(dataList);