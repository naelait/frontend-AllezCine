var plus = `
<div class="row">
  <div class="films-filtre">
    <figure class="films-fig">
      <img src="assets/img/slide1.jpg" alt="" class="films-slide">
      <figcaption>titre</figcaption>
      <figcaption><span class="left">date</span><span class="right">genre</span></figcaption>
    </figure>
    <figure class="films-fig">
      <img src="assets/img/slide1.jpg" alt="" class="films-slide">
      <figcaption>titre</figcaption>
      <figcaption><span class="left">date</span><span class="right">genre</span></figcaption>
    </figure>
    <figure class="films-fig">
      <img src="assets/img/slide1.jpg" alt="" class="films-slide">
      <figcaption>titre</figcaption>
      <figcaption><span class="left">date</span><span class="right">genre</span></figcaption>
    </figure>
    <figure class="films-fig">
      <img src="assets/img/slide1.jpg" alt="" class="films-slide">
      <figcaption>titre</figcaption>
      <figcaption><span class="left">date</span><span class="right">genre</span></figcaption>
    </figure>
    <figure class="films-fig">
      <img src="assets/img/slide1.jpg" alt="" class="films-slide">
      <figcaption>titre</figcaption>
      <figcaption><span class="left">date</span><span class="right">genre</span></figcaption>
    </figure>
    <figure class="films-fig">
      <img src="assets/img/slide1.jpg" alt="" class="films-slide">
      <figcaption>titre</figcaption>
      <figcaption><span class="left">date</span><span class="right">genre</span></figcaption>
    </figure>
  </div>
</div>
<div class="row">
  <div class="films-filtre">
    <figure class="films-fig">
      <img src="assets/img/slide1.jpg" alt="" class="films-slide">
      <figcaption>titre</figcaption>
      <figcaption><span class="left">date</span><span class="right">genre</span></figcaption>
    </figure>
    <figure class="films-fig">
      <img src="assets/img/slide1.jpg" alt="" class="films-slide">
      <figcaption>titre</figcaption>
      <figcaption><span class="left">date</span><span class="right">genre</span></figcaption>
    </figure>
    <figure class="films-fig">
      <img src="assets/img/slide1.jpg" alt="" class="films-slide">
      <figcaption>titre</figcaption>
      <figcaption><span class="left">date</span><span class="right">genre</span></figcaption>
    </figure>
    <figure class="films-fig">
      <img src="assets/img/slide1.jpg" alt="" class="films-slide">
      <figcaption>titre</figcaption>
      <figcaption><span class="left">date</span><span class="right">genre</span></figcaption>
    </figure>
    <figure class="films-fig">
      <img src="assets/img/slide1.jpg" alt="" class="films-slide">
      <figcaption>titre</figcaption>
      <figcaption><span class="left">date</span><span class="right">genre</span></figcaption>
    </figure>
    <figure class="films-fig">
      <img src="assets/img/slide1.jpg" alt="" class="films-slide">
      <figcaption>titre</figcaption>
      <figcaption><span class="left">date</span><span class="right">genre</span></figcaption>
    </figure>
  </div>
</div>
`

function MoreMovies() {
  document.getElementById("films").innerHTML = ""
  document.getElementById("films").innerHTML += plus
  document.getElementById("films").innerHTML += plus
  document.getElementById("films").innerHTML += `<div class="row">
        <div class="col-md-12 d-flex justify-content-center">
          <button onclick="LessMovies()" class="btn-sm nav-btn more" type="button">
                Moins de films
            </button>
        </div>
      </div>`
}

function LessMovies() {
  document.getElementById("films").innerHTML = "";
  document.getElementById("films").innerHTML += plus
  document.getElementById("films").innerHTML += `<div class="row">
        <div class="col-md-12 d-flex justify-content-center">
          <button onclick="MoreMovies()" class="btn-sm nav-btn more" type="button">
                Plus de films
            </button>
        </div>
      </div>`;
      $('html, body').animate({
            scrollTop: $("#films").offset().top
        }, 200);
}
