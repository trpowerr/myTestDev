function createPerson (name, type) {
  if ( name.length > 2 && name.length < 10 && findBy('type', type) != undefined) {
    const person = {
      name,
    };
    
    const arr = findBy('type', type);

    const obj = Object.assign(person,arr);

    return obj;

  } else {
    throw new Error('Wait, my boy, you are crazy?')
  }
  
}

const results = [
  {type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25},
  {type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10},
  {type: 'Magician', health: 100, level: 1, attack: 10, defence: 40},
  {type: 'Daemon', health: 100, level: 1, attack: 25, defence: 25},
  {type: 'Undead', health: 100, level: 1, attack: 40, defence: 10},
  {type: 'Zombie', health: 100, level: 1, attack: 10, defence: 40},,
]

function findBy (key,value) {
  return results.find( ({ [key]: val }) => val === value);
}

const ourHero = createPerson('Masha', 'Undead')

console.log(ourHero);


const {name, type, health, level, attack , defence} = ourHero;

const finnalArr = {name2: 'Masha', type2: 'Undead', health2: 100, level2: 1, attack2: 40, defence2: 10};
const {name2, type2, health2, level2, attack2 , defence2} = finnalArr;

function checkArr () {
  if (name == name2, type == type2, health == health2, level == level2, attack == attack2, defence == defence2) {
    return true
  } else {
    return false
  }
}
