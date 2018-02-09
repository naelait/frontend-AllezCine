var writeSeries = ""
var writeToggleSeries = ""
var rnd = Math.floor(Math.random() * 24) + 0
var temp = [];

function createSeriesRow() {
  temp.push(rnd);
  writeSeries = `${writeSeries}
              <div class="col-6 col-md-2 ${aff[rnd][3]}-Series">
              <div class="text-center">
                <img  src="${aff[rnd][1]}" alt="${aff[rnd][0]}">
              </div>
              <div class="caption text-center">
                ${aff[rnd][0]}</br>
                ${aff[rnd][2]},   ${aff[rnd][3]}
              </div>
            </div>`;
}

function createToggleSeriesRow(){
  temp.push(rnd);
  writeToggleSeries = `${writeToggleSeries}
              <div class="toggleSerie-js collapse col-6 col-md-2 ${aff[rnd][3]}-Series">
              <div class="text-center">
                <img  src="${aff[rnd][1]}" alt="${aff[rnd][0]}">
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
    createSeriesRow()
  }
}
for (var i = 0; i < 12; i++) {
  if (temp.includes(rnd) == true) {
    rnd = Math.floor(Math.random() * 24) + 0
    i--
  } else {
    createToggleSeriesRow()
  }
}
featuredSeries = writeSeries + writeToggleSeries
$("#Series").html(featuredSeries)
