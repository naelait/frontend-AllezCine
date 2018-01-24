var allFilms = document.getElementsByClassName('films')
var actionFilm = document.getElementsByClassName('action-film')
var policeFilm = document.getElementsByClassName('police-film')


function policeFilter() {
  for (i of policeFilm) {
    i.style.display = "none"
  }
  for (i of actionFilm){
    i.style.display = "inline"
  }
}



function actionFilter() {
  for (i of actionFilm) {
    i.style.display = "none"
  }
  for (i of policeFilm){
    i.style.display = "inline"
  }
}

function reset(){
  for (i of actionFilm) {
    i.style.display = "inline"
  }
  for (i of policeFilm){
    i.style.display = "inline"
  }
}

$('#action-button').click(policeFilter)
$('#police-button').click(actionFilter)
$('#all-button').click(reset)
