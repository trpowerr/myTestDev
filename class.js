class Character {
  constructor (name) {
    this.name = name;
    this.health = 100;
    this.level = 1;
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



const newPerson = new Zombie ('Misha');

function checkArrLevelUp () {

  console.log(newPerson);

  newPerson.levelUp()

  console.log(newPerson);

  const { name, health, level, attack , defence} = newPerson;
  console.log(name,health, level, attack , defence)

  const finnalArrLevelUp = {name3: 'Misha', health3: 100, level3: 2, attack3: 48, defence3: 12};
  const {name3,health3, level3, attack3 , defence3} = finnalArrLevelUp;
  console.log(name3,health3, level3, attack3 , defence3)
  
  if (name == name3, health == health3, level == level3, attack == attack3, defence == defence3) {
    return true
  } else {
    return false
  }
}

console.log(checkArrLevelUp());





