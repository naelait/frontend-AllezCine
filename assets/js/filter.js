var allFilms = document.getElementsByClassName('films')
var actionFilm = document.getElementsByClassName('action-film')
var policeFilm = document.getElementsByClassName('police-film')


function policeFilter() {
  for (i of policeFilm) {
    i.style.display = "none"
  }
<<<<<<< HEAD
  for (i of actionFilm){
=======
  for (i of actionFilm) {
>>>>>>> 629b90b3ae1af37e4a9c74274776b35d20485ef4
    i.style.display = "inline"
  }
}



function actionFilter() {
  for (i of actionFilm) {
    i.style.display = "none"
  }
<<<<<<< HEAD
  for (i of policeFilm){
=======
  for (i of policeFilm) {
>>>>>>> 629b90b3ae1af37e4a9c74274776b35d20485ef4
    i.style.display = "inline"
  }
}

<<<<<<< HEAD
function reset(){
  for (i of actionFilm) {
    i.style.display = "inline"
  }
  for (i of policeFilm){
=======
function reset() {
  for (i of actionFilm) {
    i.style.display = "inline"
  }
  for (i of policeFilm) {
>>>>>>> 629b90b3ae1af37e4a9c74274776b35d20485ef4
    i.style.display = "inline"
  }
}

$('#action-button').click(policeFilter)
$('#police-button').click(actionFilter)
$('#all-button').click(reset)
