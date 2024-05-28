<template>
    <div class="socials">
      <h3>Socials</h3>
      <ul>
        <li><a href="https://github.com/JHeroGR"><i class="bi bi-github"></i></a></li>
        <li><a href="https://twitter.com/JHeroGR"><i class="bi bi-twitter"></i></a></li>
        <li><a href="https://twitch.tv/JHeroGR"><i class="bi bi-twitch"></i></a></li>
        <li><a href="https://youtube.com/JHero"><i class="bi bi-youtube"></i></a></li>
      </ul>
    </div>
</template>

<script>

export default {
  name: 'Socials',
  props: {
    msg: String
  }
  
}
</script>

<style scoped>
h3 {
  text-align: center;
}
.socials {
  margin: 20px;
}
.socials ul {
  padding: 0;
  text-align: center;
}
.socials li {
  list-style-type: none;
  display: inline-block;
  margin-right: 6px;
  margin-left: 6px;
  font-size: 50px;
}
.socials li a {
  color: black;
}
</style>