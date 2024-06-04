<template>
    <div class="updates">
      <div class="container">

        <h3>Current Project(s)</h3>

        <a href="https://www.southtexascollege.edu/theatre-productions/box-office.html" class="card-link">
        <div class="card border-dark">
          <img src="../assets/burritospamorir.png" class="card-img-top" alt="Burritos Pa' Morir">
          <div class="card-body border-dark">
            <h5 class="card-title">Burritos Pa' Morir</h5>
            <p class="card-text">STC Cooper Center</p>
          </div>
        </div>
      </a>

      <a href="https://www.youtube.com/watch?v=fdeMQ7qIf8o" class="card-link">
        <div class="card border-dark">
          <img src="../assets/manic.png" class="card-img-top" alt="Manic Film">
          <div class="card-body border-dark">
            <h5 class="card-title">MANIC</h5>
            <p class="card-text">Feature Film</p>
          </div>
        </div>
      </a>


      </div>

    </div>
</template>

<style scoped>
.updates {
  background: #FFC772;
  padding-top: 3%;
  text-align: center;
}
.updates h3 {
  font-size:xx-large;
}
.card {
  display:inline-block;
  margin: 20px;
}
.card img {
  object-fit: cover;
  width: 300px;
  height: 250px;
  object-position: center top;
}
.card:hover {
  box-shadow: 1px 1px 5px 5px black;
  visibility: visible;
  opacity: 1;
  transition: all .1s ease-in;
}
</style>