$('#plus-de-films').click(function() {
  if (this.value == "Plus de films") {
    $('.toggleFilm-js').show()
    this.value = "Moins de films"
  } else {
    $('.toggleFilm-js').hide()
    this.value = "Plus de films"
    $('html, body').animate({
      scrollTop: $("#movies").offset().top
    }, 200);
  }

})
