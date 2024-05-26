<template>
    <div class="talents">
      <h3>Welcome In!</h3>
      <p>I am JHero, I am an actor, gamer, and coder.</p>
      <p>Feel free to explore who I am and what I love doing!</p>
      <ul>
        <li><RouterLink to="/actor">Actor Resume</RouterLink></li>
        <li><RouterLink to="/gamer">Gamer Things</RouterLink></li>
        <li><RouterLink to="/coder">Coder Portfolio</RouterLink></li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'Talents',
  props: {
    msg: String
  }
  
}
</script>

<style scoped>
.talents {
  background: #72FF78;
  width: 100%;
  padding: 5px 0 5px 0;
  margin-top: 10px;
}
.talents ul {
  padding: 0;
}
.talents a {
  color: white;
  background: black;
  display: block;
  text-align: center;
  text-decoration: none;
  padding: 10px;
  margin: 20px;
  border-style:solid;
  border-color: white;
  border-radius: 12px;
}
.talents h3, .talents p {
  padding-left: 5px;
  padding-right: 5px;
  text-align: center;
}
</style>