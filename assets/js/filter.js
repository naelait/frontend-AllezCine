$("#movies-filter-All").click( function(){
  $('#plus-de-films').show()
  $('#plus-de-films').attr('value', "Moins de films")
  $(".Action-Movies").show()
  $(".Adventure-Movies").show()
  $(".Fiction-Movies").show()
  $(".Comedy-Movies").show()
}
)

$("#movies-filter-Comedy").click( function(){
  $('#plus-de-films').hide()
  $(".Action-Movies").hide()
  $(".Adventure-Movies").hide()
  $(".Fiction-Movies").hide()
  $(".Comedy-Movies").show()
})

$("#movies-filter-Adventure").click( function(){
  $('#plus-de-films').hide()
  $(".Action-Movies").hide()
  $(".Fiction-Movies").hide()
  $(".Comedy-Movies").hide()
  $(".Adventure-Movies").show()
})

$("#movies-filter-Action").click( function(){
  $('#plus-de-films').hide()
  $(".Action-Movies").show()
  $(".Fiction-Movies").hide()
  $(".Comedy-Movies").hide()
  $(".Adventure-Movies").hide()
})

$("#movies-filter-Fiction").click( function(){
  $('#plus-de-films').hide()
  $(".Action-Movies").hide()
  $(".Fiction-Movies").show()
  $(".Comedy-Movies").hide()
  $(".Adventure-Movies").hide()
})


$("#series-filter-All").click( function(){
  $('#plus-de-series').show()
  $('#plus-de-series').attr('value', "Moins de series")
  $(".Action-Series").show()
  $(".Adventure-Series").show()
  $(".Fiction-Series").show()
  $(".Comedy-Series").show()
}
)

$("#series-filter-Comedy").click( function(){
  $(".Action-Series").hide()
  $(".Adventure-Series").hide()
  $(".Fiction-Series").hide()
  $(".Comedy-Series").show()
})

$("#series-filter-Adventure").click( function(){
  $(".Action-Series").hide()
  $(".Fiction-Series").hide()
  $(".Comedy-Series").hide()
  $(".Adventure-Series").show()
})

$("#series-filter-Action").click( function(){
  $(".Action-Series").show()
  $(".Fiction-Series").hide()
  $(".Comedy-Series").hide()
  $(".Adventure-Series").hide()
})

$("#series-filter-Fiction").click( function(){
  $(".Action-Series").hide()
  $(".Fiction-Series").show()
  $(".Comedy-Series").hide()
  $(".Adventure-Series").hide()
})
