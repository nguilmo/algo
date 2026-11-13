function formaterDuree(minutes) {
  let total = (minutes - (minutes % 60)) / 60 + (minutes % 60) / 100;
  return total;
}

console.log(formaterDuree(135)); // "2h15min"
console.log(formaterDuree(60)); // "1h0min"
console.log(formaterDuree(45)); // "0h45min"
