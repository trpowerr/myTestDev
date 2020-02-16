class Character {
  constructor (name) {
    this.name = name;
    this.health = 1;
    this.level = 1;
    this.attack = 25;
    this.defence = 49;
  }

  levelUp() {
    if (this.health > 0) {
      this.health = 100;
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
      return;
    } else {
      throw (' Error: Нельзя повысить level умершего!');
    }
  }
}


let newPerson = new Character('MIsha');

newPerson.levelUp();

console.log(newPerson);

// for (let value in newPerson) {
//   // console.log(value);
//   if (value == 'defence') {
//     console.log(newPerson[value]);
//   }

// }







