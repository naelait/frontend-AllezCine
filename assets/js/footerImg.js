var myArray = [];
for (i = 0; i < 6; i++) {
  var nbrAleatoire = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
  if (myArray.includes(nbrAleatoire)) {
    i--;
  } else {
    myArray.push(nbrAleatoire);
    document.write('<img class="footAllezImg" src="assets/img/aff-xs' + nbrAleatoire + '.jpg" />');
  }
}
