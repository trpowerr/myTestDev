class Team {
    constructor(name) {
        this.name = name,
        this.type = 'Bowman',
        this.health = 50,
        this.level = 1,
        this.attack = 40,
        this.defence = 10
    }

    // *[Symbol.iterator]() {
    //     let newEnemy = new Team();
    //     yield
    //     return newEnemy
    // }
}

let enemy;
let enemy2;
let enemy3;

function* generateEnemy() {
    yield enemy = new Team('first');
    yield enemy2 = new Team('second');
    yield enemy3 = new Team('third');
    return 333;
}

let generate = generateEnemy();

let one = generate.next();

console.log(one);

let two = generate.next();

console.log(two);

let third = generate.next();

console.log(third);
