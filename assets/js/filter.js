var allFilms = document.getElementsByClassName('films')
var actionFilm = document.getElementsByClassName('action-film')
var policeFilm = document.getElementsByClassName('police-film')


function policeFilter() {
  for (i of policeFilm) {
    i.style.display = "none"
  }
  for (i of actionFilm) {
    i.style.display = "block"
  }
}



function actionFilter() {
  for (i of actionFilm) {
    i.style.display = "none"
  }
  for (i of policeFilm) {
    i.style.display = "block"
  }
}

function reset() {
  for (i of actionFilm) {
    i.style.display = "block"
  }
  for (i of policeFilm) {
    i.style.display = "block"
  }
}

$('#action-button').click(policeFilter)
$('#police-button').click(actionFilter)
$('#all-button').click(reset)
