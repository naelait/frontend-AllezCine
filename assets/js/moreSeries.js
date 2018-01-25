$('#plus-de-series').click(function() {
  for (i of $('.toggle-series')) {
    if (i.style.display == "") {
      i.style.display = "block"
    } else {
      i.style.display = ""
      $('html, body').animate({
        scrollTop: $("#series").offset().top
      }, 200);
    }
  }
  if (this.value == "Plus de series") {
    this.value = "Moins de series"
  } else {
    this.value = "Plus de series"
  }

})
