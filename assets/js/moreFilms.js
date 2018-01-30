$('#plus-de-films').click(function() {
  $('#toggle-movies').toggleClass("invisible")
  if (this.value == "Plus de films") {
    this.value = "Moins de films"
  } else {
    this.value = "Plus de films"
    $('html, body').animate({
      scrollTop: $("#movies").offset().top
    }, 200);
  }

})
