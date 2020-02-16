const numberOfThings = prompt('Введите колличество покупаемы едениц: ');

function converter(num) {
  if (+num < 0 | num != +num) {
    throw new Error('error');
  }
  return num;
}

try {
  console.log(converter(numberOfThings));
} catch (error) {
  console.log('Неверный формат ввода!')
}


