function jouerTour(pointsDeVie, valeur, action) {
  if (action == attaquer) {
    let resultat = attaquer(pointsDeVie, valeur);
    return resultat;
  } else if (action == soigner) {
    let resultat = soigner(pointsDeVie, valeur);
    return resultat;
  }
}

function attaquer(pointsDeVie, valeur) {
  let total = pointsDeVie - valeur;
  return total;
}

function soigner(pointsDeVie, valeur) {
  let total2 = pointsDeVie + valeur;
  return total2;
}

console.log(jouerTour(100, 30, attaquer)); // 70
console.log(jouerTour(50, 20, soigner)); // 70
console.log(jouerTour(0, 25, soigner)); // 25
