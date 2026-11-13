function appliquerRemise(prix, pourcentage) {
  let total = prix - (prix * pourcentage) / 100; // prix - prix * p
  return total;
}

function ajouterTVA(prix) {
  let total2 = prix * 1.2; // +20% == *1.2
  return total2;
}

function calculerPrixFinal(prix, pourcentage) {
  let lat = ajouterTVA(appliquerRemise(prix, pourcentage));
  return lat;
}

console.log(appliquerRemise(100, 10)); // 90
console.log(ajouterTVA(50)); // 60

console.log(calculerPrixFinal(100, 10)); // 108
console.log(calculerPrixFinal(50, 20)); // 48
console.log(calculerPrixFinal(200, 0)); // 240
