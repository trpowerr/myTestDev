// import findBy from './test/closures.test';

// const finder = findBy('name', 'урон');
// const results = [
//   {name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями'},
//   {name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием'},
//   {name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса'},
// ].filter(finder);



// console.log(results);



///////////////////////////////////////////////////////

const results = [
  {name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями'},
  {name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием'},
  {name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса'},
]

// const findBy = (key, value) => results.find( ({ [key]: val }) => val === value);

function findBy (key,value) {
  return results.find( ({ [key]: val }) => val === value);
}

console.log(findBy('type', 'character'));

