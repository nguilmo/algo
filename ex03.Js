function comparerScores(score1, score2) {
  if (score1 > score2) {
    return "Joueur 1 gagne";
  } else if (score1 < score2) {
    return "Joueur 2 gagne";
  } else if ((score1 = score2)) {
    return "Égalité";
  }
}

console.log(comparerScores(12, 8)); // "Joueur 1 gagne"
console.log(comparerScores(3, 7)); // "Joueur 2 gagne"
console.log(comparerScores(5, 5)); // "Égalité"
