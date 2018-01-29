var aff = [
  ["Wonder Woman", "assets/img/aff-sm1.jpg", "2017", "Action"],
  ["Mr Gaga", "assets/img/aff-sm2.jpg", "2015", "Comedy"],
  ["In The Fade", "assets/img/aff-sm3.jpg", "2014", "Adventure"],
  ["X-Men", "assets/img/aff-sm4.jpg", "2015", "Fiction"],
  ["Paddington 2", "assets/img/aff-sm5.jpg", "2013", "Comedy"],
  ["Safari", "assets/img/aff-sm6.jpg", "2016", "Comedy"],
  ["The Hobbit", "assets/img/aff-sm7.jpg", "2017", "Fiction"],
  ["Pirates Of Caraïbes", "assets/img/aff-sm8.jpg", "2012", "Action"],
  ["Star Wars", "assets/img/aff-sm9.jpg", "2017", "Fiction"],
  ["Avatar", "assets/img/aff-sm10.jpg", "2014", "Fiction"],
  ["King Kong", "assets/img/aff-sm11.jpg", "2012", "Fiction"],
  ["La Croisée.", "assets/img/aff-sm12.jpg", "2014", "Adventure"],
  ["Tintin", "assets/img/aff-sm13.jpg", "2013", "Adventure"],
  ["Titanic", "assets/img/aff-sm14.jpg", "2006", "Adventure"],
  ["Les Ch’Tis", "assets/img/aff-sm15.jpg", "2009", "Comedy"],
  ["Top Bifle", "assets/img/aff-sm16.jpg", "2006", "Adventure"],
  ["Labyrinthe", "assets/img/aff-sm17.jpg", "2016", "Fiction"],
  ["Seul sur Mars", "assets/img/aff-sm18.jpg", "2015", "Fiction"],
  ["Tomb Raider", "assets/img/aff-sm19.jpg", "2012", "Action"],
  ["Avengers", "assets/img/aff-sm20.jpg", "2014", "Fiction"],
  ["Underworld", "assets/img/aff-sm21.jpg", "2012", "Fiction"],
  ["24 Hours Live", "assets/img/aff-sm22.jpg", "2017", "Action"],
  ["Twilight", "assets/img/aff-sm23.jpg", "2015", "Comedy"],
  ["Life", "assets/img/aff-sm24.jpg", "2017", "Fiction"],
  ["Captain America", "assets/img/aff-sm25.jpg", "2014", "Fiction"],
  ["Scary Movie", "assets/img/aff-sm26.jpg", "2008", "Comedy"],
  ["Le crime de l’Orient Express", "assets/img/aff-sm27.jpg", "2007", "Adventure"],
  ["Les Tuche", "assets/img/aff-sm28.jpg", "2014", "Comedy"],
  ["Terminator", "assets/img/aff-sm29.jpg", "2001", "Fiction"],
  ["La Belle et la Bête", "assets/img/aff-sm30.jpg", "2016", "Comedy"],
  ["Very Bad Trip", "assets/img/aff-sm31.jpg", "2015", "Comedy"],
  ["Gladiator", "assets/img/aff-sm32.jpg", "2014", "Adventure"],
  ["Matrix", "assets/img/aff-sm33.jpg", "2007", "Fiction"],
  ["Iron Man 2", "assets/img/aff-sm34.jpg", "2012", "Fiction"],
  ["Seuls", "assets/img/aff-sm35.jpg", "2011", "Comedy"]
];
var writemovies = ""
var writeToggleMovies = ""

function createmoviesRow() {
  var rnd = Math.floor(Math.random() * 12) + 1
  while (aff[rnd] == null) {
    rnd = Math.floor(Math.random() * 12) + 1
  }
  writemovies = `${writemovies}
              <div class="col ${aff[rnd][3]}-Movies">
              <div class="text-center">
                <img  src="${aff[rnd][1]}" alt="">
              </div>
              <div class="caption text-center">
                ${aff[rnd][0]}</br>
                ${aff[rnd][2]},   ${aff[rnd][3]}
              </div>
            </div>`;
  document.getElementById("movies").innerHTML = writemovies
  aff.splice(rnd, 1)
}

function createToggleMoviesRow(){
  var rnd = Math.floor(Math.random() * 34) + 1
  while (aff[rnd] == null) {
    rnd = Math.floor(Math.random() * 34) + 1
  }
  writeToggleMovies = `${writeToggleMovies}
              <div class="col ${aff[rnd][3]}-Movies">
              <div class="text-center">
                <img  src="${aff[rnd][1]}" alt="">
              </div>
              <div class="caption text-center">
                ${aff[rnd][0]}</br>
                ${aff[rnd][2]},   ${aff[rnd][3]}
              </div>
            </div>`;
  document.getElementById("toggle-movies").innerHTML = writeToggleMovies
  aff.splice(rnd, 1)
}

for (var i=0;i<12;i++){
  createmoviesRow()
  createToggleMoviesRow()
}