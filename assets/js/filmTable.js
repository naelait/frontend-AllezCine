var writemovies = "";
var writeToggleMovies = "";
var rnd = Math.floor(Math.random() * 24) + 0
var temp = [];

function createmoviesRow() {
  temp.push(rnd);
  writemovies = `${writemovies}
              <div class="col-6 col-md-2 ${aff[rnd][3]}-Movies">
              <div class="text-center">
                <a data-toggle="modal" data-target="#modal-film"> <img class="film-item" id="${aff[rnd][6]}" src="${aff[rnd][1]}"></a>
              </div>
              <div class="caption text-center">
                ${aff[rnd][0]}</br>
                ${aff[rnd][2]},   ${aff[rnd][3]}
              </div>
            </div>`;
}

function createToggleMoviesRow() {
  temp.push(rnd)
  writeToggleMovies = `${writeToggleMovies}
              <div class="toggleFilm-js collapse col-6 col-md-2 ${aff[rnd][3]}-Movies">
              <div class="text-center">
                <a data-toggle="modal" data-target="#modal-film"> <img class="film-item" id="${aff[rnd][6]}" src="${aff[rnd][1]}"></a>
              </div>
              <div class="caption text-center">
                ${aff[rnd][0]}</br>
                ${aff[rnd][2]},   ${aff[rnd][3]}
              </div>
            </div>`;

}

for (var i = 0; i < 12; i++) {
  if (temp.includes(rnd) == true) {
    rnd = Math.floor(Math.random() * 24) + 0
    i--
  } else {
    createmoviesRow()
  }
}
for (var i = 0; i < 12; i++) {
  if (temp.includes(rnd) == true) {
    rnd = Math.floor(Math.random() * 24) + 0
    i--
  } else {
    createToggleMoviesRow()
  }
}
featuredMovies = writemovies + writeToggleMovies
$("#movies").html(featuredMovies)

$('.film-item').click(function(e) {
  e = e || window.event;
  e = e.target || e.srcElement;
  filmId = e.id
  $('#modal-film').html(`<div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">${aff[filmId][0]}</h5>
      </div>
      <div class="row no-gutters">
      <div class="col-5">
        <p> <span class="red">Genre : </span> ${aff[filmId][3]} </p>
        <p> <span class="red">Date de sortie : </span> ${aff[filmId][2]} </p>
        <p> <span class="red">Synopsis : </span> ${aff[filmId][5]}
      </div>
        <div class="offset-1 col-6">
          <iframe frameBorder="" width="100%" height="325px" src="${aff[filmId][4]}"> </iframe>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn nav-btn" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>`)
})
