var aff = [
  ["Wonder Woman", "assets/img/aff-sm1.jpg", "2017", "Action", "https://www.youtube.com/embed/5lGoQhFb4NM","C'était avant qu'elle ne devienne Wonder Woman, à l'époque où elle était encore Diana, princesse des Amazones et combattante invincible. Un jour, un pilote américain s'écrase sur l'île paradisiaque où elle vit, à l'abri des fracas du monde."],
  ["Mr Gaga", "assets/img/aff-sm2.jpg", "2015", "Comedy", "https://www.youtube.com/embed/F6gd8xpFMsM", "L’histoire fascinante d'Ohad Naharin, célèbre chorégraphe de la Batsheva Dance Company, dont les performances dégagent une puissance et une beauté inégalées. Le film nous dévoile le processus créatif d'un chef de file incontesté de la danse contemporaine, l’invention d’un langage chorégraphique unique et d’une technique de danse hors-norme appelée 'Gaga'."],
  ["In The Fade", "assets/img/aff-sm3.jpg", "2014", "Adventure", "https://www.youtube.com/embed/UyjnzhXJlHU", "La vie de Katja est bouleversée lorsque son fils et son mari trouvent la mort dans un attentat. Katja est mariée au Kurde Nuri Sekerci, avec qui elle a un fils de cinq ans. Ils vivent à Hambourg. ... Au cours du procès, un expert scientifique décrit tous les détails macabres de l'attentat."],
  ["X-Men", "assets/img/aff-sm4.jpg", "2015", "Fiction", "https://www.youtube.com/embed/tCbvZhVdPw0", "X-Men. Le Professeur Charles Xavier : C'est un mutant disposant de pouvoirs psychiques et télépathiques. Il a fondé l'institut qui porte son nom afin d'apprendre aux mutants à contrôler leurs pouvoirs. Pour lui, mutants et non-mutants peuvent coexister pacifiquement."],
  ["Paddington 2", "assets/img/aff-sm5.jpg", "2013", "Comedy", "https://www.youtube.com/embed/qFuzMlfZGWM", "Là-bas, le petit ours embarque clandestinement à bord d'un cargo qui l'emmène à Londres. Sa tante reste au Pérou et s'installe dans une maison de retraite pour les ours où elle sera en sécurité. Puis l'ourson arrive à la gare de Paddington et est recueilli par la famille Brown (en théorie pour une seule nuit)."],
  ["Safari", "assets/img/aff-sm6.jpg", "2016", "Comedy", "https://www.youtube.com/embed/ad8gbn0aMBs", "Six touristes français ont décidé de découvrir l'Afrique du Sud au cours d'un safari organisé par Richard Dacier. Ils ignorent alors que leur guide n'a pas mis les pieds dans la brousse depuis 30 ans... Et qu'il a peur des animaux !"],
  ["Matrix", "assets/img/aff-sm33.jpg", "2007", "Fiction", "https://www.youtube.com/embed/m8e-FF8MsqU", "Toc Toc Neo. » Matrix (en France) ou La Matrice (au Québec et au Nouveau-Brunswick) (The Matrix) est un film australo-américain de science-fiction, un « cyberfilm», réalisé par Andy et Larry Wachowski et sorti en 1999. ... Il est considéré comme l'un des films du genre le plus important de son époque."],
  ["Iron Man 2", "assets/img/aff-sm34.jpg", "2012", "Fiction", "https://www.youtube.com/embed/wKtcmiifycU", "Robert Downey Jr. dans le rôle de Tony Stark / Iron Man. Gwyneth Paltrow dans le rôle de Pepper Potts. Don Cheadle dans le rôle de lieutenant-colonel James « Rhodey » Rhodes / War Machine."]
];
var writeshop = ""
var y = -1
var x = 0

function createshopRow() {
  document.getElementById("shop-js").innerHTML = writeshop
}

for (var i = 0; i < aff.length; i++) {
  writeshop = `${writeshop}<div class="col-md-3 col-xs-2 col-lg-3">
    <div onclick="linkInfos" class="text-center">
      <img class="shop-img" src="${aff[i][1]}">
    </div>
    <div class="caption text-center">
      ${aff[i][0]}</br>
      ${aff[i][2]}, <span class="red">15€</span>
    </div>
  </div>`;
  y++
  if (y < 8) {
    createshopRow()
  }
}
function showInfos(){
  $('#title-js').html(`Titre: <span class="white">${aff[0+x][0]}</span>`)
  $('#story-js').html(`Story line: <span class="white">${aff[0+x][5]}</span>`)
  $('#release-js').html(`Année de Sortie: <span class="white">${aff[0+x][2]}</span>`)
  $('#genre-js').html(`Genre: <span class="white">${aff[0+x][3]}</span>`)
  $('#prix-js').html(`Prix: <span class="white">15€</span>`)
  $('iframe').attr('src', aff[0+x][4])
}
showInfos()
$("#next-js").click(function(){
  x++
  if (x>7){
    x = 0
  }
  showInfos()
})
$("#previous-js").click(function(){
  x--
  if (x<0){
    x = 7
  }
  showInfos()
})
