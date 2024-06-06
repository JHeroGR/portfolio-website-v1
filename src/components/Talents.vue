<template>
    <div class="container">
      <h3>Welcome In!</h3>
      <p>I am JHero, I am an actor, gamer, and coder.</p>
      <p>Feel free to explore who I am and what I love doing!</p>
      
      
      <RouterLink to="/actor" class="btn btn-primary">Actor Resume</RouterLink>
      <RouterLink to="/gamer" class="btn btn-danger">Gamer Things</RouterLink>
      <RouterLink to="/coder" class="btn btn-warning">Coder Portfolio</RouterLink>

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
  padding: 2%;
  border-radius: 5%;
  text-decoration: none;
  color: white;
}
.btn:hover {
  opacity: 0.5;
}
.btn-danger {
  background: #dc3545;
}
.btn-primary {
  background: #007bff;
}
.btn-warning {
  background: #ffc107;
}
</style>