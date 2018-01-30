$("#movies-filter-All").click( function(){
  $(".Action-Movies").removeClass("invisible")
  $(".Adventure-Movies").removeClass("invisible")
  $(".Fiction-Movies").removeClass("invisible")
  $(".Comedy-Movies").removeClass("invisible")
}
)

$("#movies-filter-Comedy").click( function(){
  $(".Action-Movies").addClass("invisible")
  $(".Adventure-Movies").addClass("invisible")
  $(".Fiction-Movies").addClass("invisible")
  $(".Comedy-Movies").removeClass("invisible")
})

$("#movies-filter-Adventure").click( function(){
  $(".Action-Movies").addClass("invisible")
  $(".Fiction-Movies").addClass("invisible")
  $(".Comedy-Movies").addClass("invisible")
  $(".Adventure-Movies").removeClass("invisible")
})

$("#movies-filter-Action").click( function(){
  $(".Action-Movies").removeClass("invisible")
  $(".Fiction-Movies").addClass("invisible")
  $(".Comedy-Movies").addClass("invisible")
  $(".Adventure-Movies").addClass("invisible")
})

$("#movies-filter-Fiction").click( function(){
  $(".Action-Movies").addClass("invisible")
  $(".Fiction-Movies").removeClass("invisible")
  $(".Comedy-Movies").addClass("invisible")
  $(".Adventure-Movies").addClass("invisible")
})


$("#series-filter-All").click( function(){
  $(".Action-Series").removeClass("invisible")
  $(".Adventure-Series").removeClass("invisible")
  $(".Fiction-Series").removeClass("invisible")
  $(".Comedy-Series").removeClass("invisible")
}
)

$("#series-filter-Comedy").click( function(){
  $(".Action-Series").addClass("invisible")
  $(".Adventure-Series").addClass("invisible")
  $(".Fiction-Series").addClass("invisible")
  $(".Comedy-Series").removeClass("invisible")
})

$("#series-filter-Adventure").click( function(){
  $(".Action-Series").addClass("invisible")
  $(".Fiction-Series").addClass("invisible")
  $(".Comedy-Series").addClass("invisible")
  $(".Adventure-Series").removeClass("invisible")
})

$("#series-filter-Action").click( function(){
  $(".Action-Series").removeClass("invisible")
  $(".Fiction-Series").addClass("invisible")
  $(".Comedy-Series").addClass("invisible")
  $(".Adventure-Series").addClass("invisible")
})

$("#series-filter-Fiction").click( function(){
  $(".Action-Series").addClass("invisible")
  $(".Fiction-Series").removeClass("invisible")
  $(".Comedy-Series").addClass("invisible")
  $(".Adventure-Series").addClass("invisible")
})
