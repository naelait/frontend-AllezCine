$('#plus-de-series').click(function() {
  if (this.value == "Plus de series") {
    $('.toggleSerie-js').show()
    this.value = "Moins de series"
  } else {
    $('.toggleSerie-js').hide()
    this.value = "Plus de series"
    $('html, body').animate({
      scrollTop: $("#Series").offset().top
    }, 200);
  }

})
