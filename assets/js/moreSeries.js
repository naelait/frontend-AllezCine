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

function MoreSeries() {
  document.getElementById("series").innerHTML = ""
  document.getElementById("series").innerHTML += plus
  document.getElementById("series").innerHTML += plus
  document.getElementById("series").innerHTML += `<div class="row">
        <div class="col-md-12 d-flex justify-content-center">
          <button onclick="LessSeries()" class="btn-sm nav-btn more" type="button">
                Moins de series
            </button>
        </div>
      </div>`
}

function LessSeries() {
  document.getElementById("series").innerHTML = "";
  document.getElementById("series").innerHTML += plus
  document.getElementById("series").innerHTML += `<div class="row">
        <div class="col-md-12 d-flex justify-content-center">
          <button onclick="MoreSeries()" class="btn-sm nav-btn more" type="button">
                Plus de series
            </button>
        </div>
      </div>`;
      $('html, body').animate({
            scrollTop: $("#series").offset().top
        }, 200);
}
