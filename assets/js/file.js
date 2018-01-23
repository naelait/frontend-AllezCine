var plus = `<figure class="films-fig">
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
`

function MoreMovies() {
  document.getElementById("films").innerHTML = ""
  document.getElementById("films").innerHTML += plus
  document.getElementById("films").innerHTML += plus
  document.getElementById("films").innerHTML += `<button onclick="LessMovies()" class="btn-sm nav-btn more" type="button">
      Moins de films
  </button>`
}

function LessMovies() {
  document.getElementById("films").innerHTML = "";
  document.getElementById("films").innerHTML += plus
  document.getElementById("films").innerHTML += `<button onclick="MoreMovies()" class="btn-sm nav-btn more" type="button">
      Plus de films
  </button>`
}
