const units = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

function sortDescending() {
  units.sort((a, b) => {
    return b.health - a.health;
  });

  return units;
}

console.log(sortDescending());


// var items = [
//   { name: 'Edward', value: 21 },
//   { name: 'Sharpe', value: 37 },
//   { name: 'And', value: 45 },
//   { name: 'The', value: -12 },
//   { name: 'Magnetic' },
//   { name: 'Zeros', value: 37 }
// ];
// items.sort(function (a, b) {
//   if (a.name > b.name) {
//     return 1;
//   }
//   if (a.name < b.name) {
//     return -1;
//   }
//   // a должно быть равным b
//   return 0;
// });

// console.log(items);
