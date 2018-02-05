var writeshop = ""
var rnd = Math.floor(Math.random() * 24) + 0
var temp = [];

function createshopRow() {
  temp.push(rnd)
  writeshop = `${writeshop}<div class="col-3">
    <div class="text-center">
      <img id="${aff[rnd][6]}" class="shop-img img-fluid shop-item" src="${aff[rnd][1]}">
    </div>
    <div class="caption text-center">
      ${aff[rnd][0]}</br>
      ${aff[rnd][2]}, <span class="red">15€</span>
    </div>
  </div>`;
  document.getElementById("shop-js").innerHTML = writeshop
}


for (var i = 0; i < 8; i++) {
  if (temp.includes(rnd) == true) {
    rnd = Math.floor(Math.random() * 24) + 0
    i--
  } else {
    createshopRow()
  }
}



$('#next-js').click(function() {
  temp = []
  i = 0
  writeshop = ""
  document.getElementById("shop-js").innerHTML = ""
  for (var i = 0; i < 8; i++) {
    if (temp.includes(rnd) == true) {
      rnd = Math.floor(Math.random() * 24) + 0
      i--
    } else {
      createshopRow()
    }
  }
  showInfos()
})
$('#previous-js').click(function() {
  temp = []
  i = 0
  writeshop = ""
  document.getElementById("shop-js").innerHTML = ""
  for (var i = 0; i < 8; i++) {
    if (temp.includes(rnd) == true) {
      rnd = Math.floor(Math.random() * 24) + 0
      i--
    } else {
      createshopRow()
    }
  }
  showInfos()
})

function showInfos() {
  $('.shop-item').click(function(e) {
    e = e || window.event;
    e = e.target || e.srcElement;
    id = e.id
    $('#title-js').html(`Titre: <span class="white">${aff[id][0]}</span>`)
    $('#story-js').html(`Story line: <span class="white">${aff[id][5]}</span>`)
    $('#release-js').html(`Année de Sortie: <span class="white">${aff[id][2]}</span>`)
    $('#genre-js').html(`Genre: <span class="white">${aff[id][3]}</span>`)
    $('#prix-js').html(`Prix: <span class="white">15€</span>`)
    $('iframe').attr('src', aff[id][4])
  })
}

showInfos()
