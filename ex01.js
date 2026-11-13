function calculerPrixTotal(prixUnitaire, quantite, fraisLivraison) {
  let totale = prixUnitaire * quantite + fraisLivraison;
  return totale;
}

console.log(calculerPrixTotal(10, 3, 5)); // 35
console.log(calculerPrixTotal(2.5, 4, 0)); // 10
console.log(calculerPrixTotal(0, 10, 4.99)); // 4.99
