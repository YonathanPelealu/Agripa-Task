const myModule = require("./army.js");
const knight = myModule.Knight;
const archer = myModule.Archer;
const spearman = myModule.Spearman;

class Barrack {
  constructor(slots) {
    this.slots = slots || [];
  }
  recruit(name) {
    this.slots.push(name);
  }
  disband(name) {
    for (let i = 0; i < this.slots.length; i++) {
      if (name === this.slots[i].name) {
        console.log(
          `${this.slots[i].name} ${this.slots[i].type} was disbanded`
        );
        this.slots.splice(i, 1);
        break;
      }
    }
  }
  summon() {
    this.slots.forEach((el) => {
      console.log(`We have ${el.name} as ${el.type}`);
    });
    console.log(`Our total Armies are ${this.slots.length}`);
  }
}

class Results {
  constructor() {
    this.knight = [];
    this.archer = [];
    this.spearman = [];
  }
  result(char) {
    for (let i = 0; i < char.length; i++) {
      if (char[i].type === "Knight") {
        this.knight.push(char[i]);
      }
      if (char[i].type === "Archer") {
        this.archer.push(char[i]);
      }
      if (char[i].type === "Spearman") {
        this.spearman.push(char[i]);
      }
    }
    return {
      Knight: this.knight,
      Archer: this.archer,
      Spearman: this.spearman,
    };
  }
}
module.exports = {
  Barrack,
  Results,
};
