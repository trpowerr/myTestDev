 const unit = { name: 'Маг', health: 10 };

 function healthPoint(lifeInNum) {
  let hp = 0;
  if (lifeInNum > 50) {
    hp = 'healthy';
  } else if (lifeInNum < 15) {
    hp = 'critical';
  } else {
    hp = 'wounded';
  }

  return hp;
}

console.log(healthPoint(unit.health));