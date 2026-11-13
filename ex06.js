function estBissextile(annee) {
  if ((annee % 4 == 0 && annee % 100 != 0) || annee % 400 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(estBissextile(2024)); // true
console.log(estBissextile(1900)); // false
console.log(estBissextile(2000)); // trues
