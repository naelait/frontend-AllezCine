$('#plus-de-Series').click(function() {
  $('#toggle-Series').toggleClass("invisible")
  if (this.value == "Plus de Series") {
    this.value = "Moins de Series"
  } else {
    this.value = "Plus de Series"
    $('html, body').animate({
      scrollTop: $("#Series").offset().top
    }, 200);
  }

})
