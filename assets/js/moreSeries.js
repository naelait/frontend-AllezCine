$('#plus-de-series').click(function() {
  $('#toggle-series').toggleClass("invisible")
  if (this.value == "Plus de series") {
    this.value = "Moins de series"
  } else {
    this.value = "Plus de series"
    $('html, body').animate({
      scrollTop: $("#series").offset().top
    }, 200);
  }

})
