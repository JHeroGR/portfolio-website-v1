<template>
    <div class="container">
      <h3>Welcome In!</h3>
      <p>I am JHero, I am an actor, gamer, and coder.</p>
      <p>Feel free to explore who I am and what I love doing!</p>
      
      
      <RouterLink to="/actor" class="btn btn-primary btn-lg btn-block">Actor Resume</RouterLink>
      <RouterLink to="/gamer" class="btn btn-danger btn-lg btn-block">Gamer Things</RouterLink>
      <RouterLink to="/coder" class="btn btn-warning btn-lg btn-block">Coder Portfolio</RouterLink>

    </div>
</template>

<script>
export default {
  name: 'Talents',  
}
</script>

<style scoped>
.container {
  margin-top: 10%;
}
.container h3 {
  font-size: xx-large;
}
.btn {
  margin-bottom: 5%;
  margin-left: 5%;
}
</style>