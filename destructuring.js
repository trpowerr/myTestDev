const data = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      }, 
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
        // <- обратите внимание, описание "засекречено"
      }
    ]	
  }

  function dataDestructuring () {
      for (let props in data) {
        if (props == 'special') {
          const {special: [{id, name, icon, description = 'Засекречено'}]} = data;  
          // console.log(id, name, icon, description);
          return {id, name, icon, description};
        }
      }
  }

  console.log(dataDestructuring());
