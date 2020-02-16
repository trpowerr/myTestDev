function Character(name, type) {
  this.name = name;
  this.type = type;
  this.health = 100;
  this.attack = 10;
  this.defence = 40
}

Character.prototype.damage = function (points) {
  return this.health - points * (1 - this.defence / 100);
}

const enemyOne = new Character ('Misha', 'Demon');

console.log(enemyOne);

console.log(enemyOne.damage(70));