class Team {
    constructor(name) {
        this.name = name,
        this.type = 'Bowman',
        this.health = 50,
        this.level = 1,
        this.attack = 40,
        this.defence = 10
    }

    *[Symbol.iterator]() {
        let enemy = new Team('first');
        yield enemy;
        let enemy2 = new Team('second');
        yield enemy2;
        let enemy3 = new Team('third');
        yield enemy3;
        return
    }
}

let generate = new Team()[Symbol.iterator]();

let one = generate.next();

console.log(one);

let two = generate.next();

console.log(two);

let third = generate.next();

console.log(third);
