class Army {
  constructor(name, type, level = 1) {
    this.name = name;
    this.type = type;
    this.level = level;
  }
  talk() {
    console.log(`Hello my name is ${this.name}`);
  }
  training() {
    this.level < 10 ? this.level++ : console.log("Already Max level");
    console.log(`${this.name} is now level ${this.level}`);
  }
}
class Knight extends Army {
  constructor(name, type = "Knight", level) {
    super(name, type, level);
  }
  talk() {
    console.log(`Hello my name is ${this.name} i'm ${this.type}`);
  }
}
class Spearman extends Army {
  constructor(name, type = "Spearman", level) {
    super(name, type, level);
  }
  talk() {
    console.log(`Hello my name is ${this.name} i'm ${this.type}`);
  }
}
class Archer extends Army {
  constructor(name, type = "Archer", level) {
    super(name, type, level);
  }
  talk() {
    console.log(`Hello my name is ${this.name} i'm ${this.type}`);
  }
}
module.exports = {
  Knight,
  Spearman,
  Archer,
};
