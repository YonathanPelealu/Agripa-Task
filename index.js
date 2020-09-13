const BarrackModule = require("./barrack.js");
const myModule = require("./army.js");
const knight = myModule.Knight;
const archer = myModule.Archer;
const spearman = myModule.Spearman;
const barrack = BarrackModule.Barrack;
const result = BarrackModule.Results;

let barracks = new barrack();
let report = new result();

let zilong = new spearman("Zilong", "Spearman");
let templar = new knight("templar", "Knight");
let miya = new archer("Miya", "Archer");
let data = barracks.slots;

barracks.recruit(zilong);
barracks.recruit(templar);
barracks.recruit(miya);
console.log("======== TROOPS REPORT =======");
barracks.summon();
console.log("======== TROOPS DISBANDED =======");
barracks.disband("templar");
console.log("======== TROOPS REPORT =======");
barracks.summon();
console.log("======== TROOPS RESULTS =======");
console.log(report.result(data));
