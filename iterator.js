class Team {
  constructor() {
      this.name = 'Лучник',
      this.type = 'Bowman',
      this.health = 50,
      this.level = 1,
      this.attack = 40,
      this.defence = 10
  }

  addAll(...persons) {
    const teamEnemy = []
    for (let person of persons) {
      person = new Team ();
      teamEnemy.push(person)
    }
    return teamEnemy;
  }
  
  // iterator(arrEnemy) {
  //   arrEnemy[Symbol.iterator] = function() {
      
  //     let person;

  //     return {
  //       next() {

  //       }
  //     }
  //   }
  // }
}

const myTeam = new Team().addAll('first', 'second','last');

console.log(myTeam);

myTeam[Symbol.iterator] = function() {
  let value = 0

  return {
    next() {
      return value < myTeam.length ?
            {value: myTeam[value++], done: false} :
            {done: true};
    }
  }
}

for(let value of myTeam) {
  console.log(value);
}