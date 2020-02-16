class imbalancePerson {
    constructor () {
        this.attack = 100;   
    }
    
    newAttack(numberOfCells) {
        return this.attack - (this.attack / 100 * ((numberOfCells - 1) * 10));
    }

    stoned (numberOfCells) {
        return person.newAttack(numberOfCells) - Math.log2(numberOfCells) * 5; 
    }

};

class Magician extends imbalancePerson {};
class Demon extends imbalancePerson {};

const person = new Magician();
const person2 = new Demon(); 
 
// console.log('Mag',person.newAttack(2));
// console.log(person.stoned(2));
// console.log('Demon',person2.newAttack(2));
// console.log(person2.stoned(2));

function checkNewAttack () {
    let att = person.newAttack(2);
    if (att == 90) {
        return true
    }
}

function checkStoned () {
    let att = person.stoned(2);
    if (att == 85) {
        return true
    }
}

