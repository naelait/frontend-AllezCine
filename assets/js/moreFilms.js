$('#plus-de-films').click(function() {
  for (i of $('.toggle-films')) {
    if (i.style.display == "") {
      i.style.display = "block"
    } else {
      i.style.display = "none"
      $('html, body').animate({
        scrollTop: $("#films").offset().top
      }, 200);
    }
  }
  if (this.value == "Plus de films") {
    this.value = "Moins de films"
  } else {
    this.value = "Plus de films"
  }

})
