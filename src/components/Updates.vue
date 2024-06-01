<template>
    <div class="updates">
      <div class="container">

        <h3><b>Current Project(s)</b></h3>

        <div class="card border-dark">
          <img src="../assets/burritospamorir.png" class="card-img-top" alt="Burritos Pa' Morir Play">
            <div class="card-body border-dark">
              <h5 class="card-title">Burritos Pa' Morir</h5>
              <div class="card-body">
                <p class="card-text">STC Cooper Center</p>
                <a href="https://www.southtexascollege.edu/theatre-productions/box-office.html" class="card-link btn btn-primary">Get Tickets</a>
              </div>
            </div>
        </div>

        <div class="card border-dark">
          <img src="../assets/manic.png" class="card-img-top" alt="Manic Film">
          <div class="card-body border-dark">
            <h5 class="card-title">MANIC</h5>
            <div class="card-body">
              <p class="card-text">Feature Film</p>
              <a href="https://www.youtube.com/watch?v=fdeMQ7qIf8o" class="card-link btn btn-primary">Watch Teaser</a>
            </div>
          </div>
        </div>


      </div>

    </div>
</template>

<script>

</script>

<style scoped>
.updates {
  background: #FFC772;
  padding: 10px;
  text-align: center;
}
.updates h3 {
  font-size:xx-large;
}
.card {
  display:inline-block;
  margin: 0 20px 20px 20px;
}
.card img {
  object-fit: cover;
  width: 300px;
  height: 300px;
  object-position: center top;
}
</style>