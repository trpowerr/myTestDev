class Character {
    constructor (name) {
      this.name = name;
      this.health = 100;
    }
  }
  
  class Bowman extends Character {
    constructor(name) {
      super(name);
      this.attack = 25;
      this.defence = 25;
    }
  }
  
  class Swordman extends Character {
    constructor(name) {
      super(name);
      this.attack = 40;
      this.defence = 10;
    }
  }
  
  class Magician extends Character {
    constructor(name) {
      super(name);
      this.attack = 10;
      this.defence = 40;
    }
  }
  
  class Undead extends Character {
    constructor(name) {
      super(name);
      this.attack = 25;
      this.defence = 25;
    }
  }
  
  class Zombie extends Character {
    constructor(name) {
      super(name);
      this.attack = 40;
      this.defence = 10;
    }
  }
  
  class Demon extends Character {
    constructor(name) {
      super(name);
      this.attack = 10;
      this.defence = 40;
    }
  }
  
  ////////////////////////////////////////////////////////////////////////////////////
  
  class Team {
      constructor() {
        this.members = new Set();
      }
  
      add(person) {
        const newPerson = new person ('Misha');
        this.members.add(newPerson);
        return this.members;
      }
  
      addAll(...persons) {
        for (let person of persons) {
          const newPerson = new person ('Misha');
          this.members.add(newPerson);
        }
        return this.members;
      }
  
      toArray() {
        const arrPersons = [];
        for (let value of this.members) {
          arrPersons.push(value);
        }
        return arrPersons;
      }
  
  }
  

const newTeam = new Team ();

newTeam.addAll(Demon, Magician,Undead, Zombie);

const enemyTeam = newTeam.toArray();

let person = enemyTeam[Symbol.iterator]();

console.log(person.next());
console.log(person.next());

// enemyTeam[Symbol.iterator] = function() {

//     return {
//         next() {

//         }
//     }
// }