const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}
let orderArr = {};
let finalArr = [];
let abcArr = [];

function orderByProps(obj, arr) {
    for (let property in obj) {
      for (let prop in arr) {
          let item = arr[prop];
          if (property == item) {
            orderArr[property] = obj[property];
            delete obj[property];
          }
      }
    }

    for (let order in orderArr) {
      finalArr.push({key: order, value: orderArr[order]});
    }

    for (let abc in obj) {
      abcArr.push({key: abc, value: obj[abc]});
      abcArr.sort(function(a, b){
        let nameA=a.key.toLowerCase(), nameB=b.key.toLowerCase()
        if (nameA < nameB)
          return -1
        if (nameA > nameB)
          return 1
        return 0
        })
    }
    
    obj = finalArr.concat(abcArr);
    
    return obj;

}    

const arr = orderByProps(obj, ['name','level']);

superMegaFinalArr = [];
arrFinalValue = ['name','level','attack', 'defence', 'health'];

arr.map(value => {
  const {key} = value;
  superMegaFinalArr.push(key);
});

function testValue() {
  for (let element of arrFinalValue) {
    let checkVar = arrFinalValue.indexOf(element)
    let checkVar2 = superMegaFinalArr.indexOf(element)
    if (checkVar != checkVar2) {
      return false;
    } else {
      return true;
    }
  };
}

console.log(testValue());

// console.log(a = superMegaFinalArr.indexOf('name'));

// console.log(a)

